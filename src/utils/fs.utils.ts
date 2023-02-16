import { hashSync } from 'bcrypt';
import { IRole } from '../interfaces';
import db from '../databases/models';
import { UserRoles } from '../constants/enum.constants';

const { roles } = db.models;

export const readBuffer = async (buffer: Buffer) => {
  const dataArray = [];
  const data = buffer.toString().split('\n');
  const [fields, ...userData] = data;
  const fieldsArray = fields.split(',');
  const getRoles = async () : Promise<IRole> => {
    const foundRole: any = await roles.findOne({
      where: {
        name: UserRoles.USER,
      },
    });
    return foundRole;
  };

  for (const item of userData) {
    const test:Partial<any> = {};
    const itemArray = item.split(',');

    for (let i = 0; i < itemArray.length; i++) {
      test[fieldsArray[i]] = itemArray[i];
    }

    if (test.email) {
      throw new Error(`email ${test.email} already exist`);
    }

    const hashedPassword = hashSync(`${test.name.slice(0, 2).toLowerCase()}@12345`, 10);
    test.password = hashedPassword;
    if (!test.roleId) {
      const result = await getRoles();
      if (!result) {
        throw new Error('role not found');
      }
      test.roleId = result.id;
    }
    dataArray.push(test);
  }
  return dataArray;
};
