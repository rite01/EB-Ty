"use strict";
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
module.exports = {
    up (queryInterface, Sequelize) {
        return _asyncToGenerator(function*() {
            try {
                const [_, result] = yield queryInterface.sequelize.query("SELECT id FROM public.department WHERE name='Android' OR name='Angular JS' OR name='Business Development' OR name='IOS' OR name='Management' OR name='Project Coordinator' OR name='Python' OR name='Quality Analyst' OR name='React Native' OR name='HRM' OR name='React JS' OR name='ROR' OR name='UI/UX'");
                if (result.rowCount <= 0) {
                    return yield queryInterface.bulkInsert('department', [
                        {
                            name: 'Android',
                            uuid: '72795fa7-4656-4b54-b182-bef5c811454f',
                            logo: 'https://thoughtwin.com/assets/img/techno-img/7.png',
                            created_at: new Date(),
                            updated_at: new Date()
                        },
                        {
                            name: 'Angular JS',
                            uuid: '8bb185a2-e0a4-4cdd-b47d-a69f762e6b0d',
                            logo: 'https://thoughtwin.com/assets/img/techno-img/4.png',
                            created_at: new Date(),
                            updated_at: new Date()
                        },
                        {
                            name: 'Business Development',
                            uuid: '6eb6322a-0f02-49fd-a7f5-9e662e51a215',
                            created_at: new Date(),
                            updated_at: new Date()
                        },
                        {
                            name: 'Blockchain',
                            uuid: '4a5cb50f-d596-484c-92c4-65a05c91f5c8',
                            logo: 'https://thoughtwin.com/assets/img/techno-img/9.png',
                            created_at: new Date(),
                            updated_at: new Date()
                        },
                        {
                            name: 'IOS',
                            uuid: 'f284f345-b3ea-44d2-acd5-f90688f3ffb9',
                            logo: 'https://thoughtwin.com/assets/img/techno-img/8.png',
                            created_at: new Date(),
                            updated_at: new Date()
                        },
                        {
                            name: 'Management',
                            uuid: 'd2331ac5-095d-431d-b93a-601ded630c73',
                            created_at: new Date(),
                            updated_at: new Date()
                        },
                        {
                            name: 'Project Coordinator',
                            uuid: 'add70d4b-8fc0-48ed-90a0-ef8831b76fdb',
                            created_at: new Date(),
                            updated_at: new Date()
                        },
                        {
                            name: 'Python',
                            uuid: 'b7f6ed45-7004-4c68-92e3-57db95deec17',
                            logo: 'https://thoughtwin.com/assets/img/techno-img/1.png',
                            created_at: new Date(),
                            updated_at: new Date()
                        },
                        {
                            name: 'Quality Analyst',
                            uuid: 'f118f197-7ce5-4b09-a7f6-14d353327644',
                            created_at: new Date(),
                            updated_at: new Date()
                        },
                        {
                            name: 'React Native',
                            uuid: 'f5f74c51-c8d6-4517-be7f-a7dbebd0ee7b',
                            logo: 'https://thoughtwin.com/assets/img/techno-img/hover/12.png',
                            created_at: new Date(),
                            updated_at: new Date()
                        },
                        {
                            name: 'HRM',
                            uuid: '141c570f-8c35-499d-a99e-fa911e8e2600',
                            created_at: new Date(),
                            updated_at: new Date()
                        },
                        {
                            name: 'React JS',
                            uuid: '7f0393ae-cc57-4787-9ea0-4a62697ce58c',
                            logo: 'https://thoughtwin.com/assets/img/techno-img/5.png',
                            created_at: new Date(),
                            updated_at: new Date()
                        },
                        {
                            name: 'ROR',
                            uuid: 'e633ffdf-20aa-4ad5-9173-6310e6c2dfaa',
                            logo: 'https://thoughtwin.com/assets/img/techno-img/2.png',
                            created_at: new Date(),
                            updated_at: new Date()
                        },
                        {
                            name: 'UI/UX',
                            uuid: '49e68acf-626b-4411-8253-7a9f953f5ae2',
                            created_at: new Date(),
                            updated_at: new Date()
                        }
                    ]);
                }
            } catch (error) {
                process.env.NODE_ENV !== 'production' && console.log({
                    error
                });
            }
        })();
    },
    down: (queryInterface)=>queryInterface.bulkDelete('department', null, {})
};

//# sourceMappingURL=20221210074153-department.js.map