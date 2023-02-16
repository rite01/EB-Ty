import { NextFunction, Request, Response } from 'express';
import { IUserProfile } from '../../interfaces';
import { CreateUserDto } from '../../dtos/user.dtos';
import { UserProfileService } from '../../services';

export class UserProfileController {
  private profileService = new UserProfileService();

  /**
   * @swagger
   *
   * /profile/create:
   *   post:
   *     tags:
   *      - UserProfile
   *     description: Create User to the application
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         description: user data.
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/Create'
   *     responses:
   *       200:
   *         description: success
   * definitions:
   *    Create:
   *      required:
   *          - designationId
   *          - branchId
   *          - departmentId
   *          - profileUrl
   *          - dateOfBirth
   *          - dateOfJoining
   *      properties:
   *        designationId:
   *          type: string
   *          description: Designation Id
   *        branchId:
   *          type: string
   *          description: Branch Id
   *        departmentId:
   *          type: string
   *          description: Department Id
   *        profileUrl:
   *          type: string
   *          description: Profile url
   *        dateOfBirth:
   *          type: string
   *          description: User Date Of Birth
   *        dateOfJoining:
   *          type: string
   *          description: User Date Of Joining
   */
  public createUserProfiles = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const profileData: any = req.body;
      console.log(profileData);
      const data: IUserProfile = await this.profileService.createUserProfile(profileData);

      return res.status(201).json({ data, status: 200, message: 'user profile created successfully' });
    } catch (error) {
      return next(error);
    }
  };

  /**
   * @swagger
   *
   * /profile/getAll:
   *   get:
   *     tags:
   *      - UserProfile
   *     description: Get All UserProfile
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: success
   */

  public getAllProfiles = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.profileService.findAllUserProfiles();

      return res.status(200).json({ data, status: 200, message: 'profiles fetched successfully' });
    } catch (error) {
      return next(error);
    }
  };

  /**
   * @swagger
   *
   * /profile/getAll/:id:
   *   get:
   *     tags:
   *      - UserProfile
   *     description: Login user to the application
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: success
   */

  public getProfileById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const data: IUserProfile = await this.profileService.findProfilesById(id);

      return res.status(200).json({ data, status: 200, message: 'success' });
    } catch (error) {
      return next(error);
    }
  };

  /**
   * @swagger
   *
   * /profile/update/:id:
   *   patch:
   *     tags:
   *      - UserProfile
   *     description: Create User to the application
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         description: user data.
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/Create'
   *     responses:
   *       200:
   *         description: success
   * definitions:
   *    Create:
   *      required:
   *          - designationId
   *          - branchId
   *          - departmentId
   *          - profileUrl
   *          - dateOfBirth
   *          - dateOfJoining
   *      properties:
   *        designationId:
   *          type: string
   *          description: Designation Id
   *        branchId:
   *          type: string
   *          description: Branch Id
   *        departmentId:
   *          type: string
   *          description: Department Id
   *        profileUrl:
   *          type: string
   *          description: Profile url
   *        dateOfBirth:
   *          type: string
   *          description: User Date Of Birth
   *        dateOfJoining:
   *          type: string
   *          description: User Date Of Joining
   */
  public updateProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const profileData: IUserProfile = req.body;
      const data = await this.profileService.updateUserProfile(id, profileData);

      return res.status(200).json({ data, status: 200, message: 'profile updated successfully' });
    } catch (error) {
      return next(error);
    }
  };

  /**
   * @swagger
   *
   * /profile/delete/:id:
   *   delete:
   *     tags:
   *      - UserProfile
   *     description: Login user to the application
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: success
   */
  public deleteUserProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const data = await this.profileService.deleteUserProfile(id);

      return res.status(200).json({ data, status: 200, message: 'user deleted successfully' });
    } catch (error) {
      return next(error);
    }
  };
}
