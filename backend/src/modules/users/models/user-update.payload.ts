//#region Imports

import { ApiModelProperty } from '@nestjs/swagger';

import { IsEmail, IsOptional, IsString } from 'class-validator';
import { Column } from 'typeorm';

import { DefaultValidationMessages } from '../../../models/enums/default-validation-messages';

//#endregion

/**
 * As informações enviadas para atualizar um usuário
 */
export class UserUpdatePayload {

  /**
   * O e-mail do usuário
   */
  @ApiModelProperty()
  @IsOptional()
  @IsString({ message: DefaultValidationMessages.IsString })
  @IsEmail({}, { message: DefaultValidationMessages.IsEmail })
  public email?: string;

  /**
   * A senha do usuário
   */
  @ApiModelProperty()
  @IsOptional()
  @IsString({ message: DefaultValidationMessages.IsString })
  public password?: string;

  /**
   * As permissões de um usuário
   */
  @ApiModelProperty({ description: 'Only admins can change this property.' })
  @IsOptional()
  @IsString({ message: DefaultValidationMessages.IsString })
  public roles?: string;

}