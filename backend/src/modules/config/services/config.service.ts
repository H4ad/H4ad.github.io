//#region Imports

import { InternalServerErrorException } from '@nestjs/common';
import { CleanEnv, ValidatorSpec } from 'envalid';

import * as envalid from 'envalid';

import { IDotEnv } from '../../../models/interfaces/dotenv';
import { implementOptionalInterface } from '../../../utils/interface';

//#endregion

/**
 * A classe que representa o serviço que guarda as configurações do ambiente
 */
export class ConfigService extends implementOptionalInterface<Partial<Readonly<IDotEnv>> & CleanEnv>() {

  //#region Constructor

  /**
   * Construtor padrão
   *
   * @param dotEnvName O nome do arquivo que contém as configurações, normalmente sendo .env
   */
  constructor(
    dotEnvName: string = '.env',
  ) {
    super();

    Object.assign(this, this.validate(dotEnvName));
  }

  //#endregion

  //#region Private Methods

  /**
   * Método que realiza a validação das variaveis de ambiente
   *
   * @param dotEnvName O nome do arquivo que contém as configurações, normalmente sendo .env
   */
  private validate(dotEnvName: string): IDotEnv {
    type DotEnvValidation = { [key in keyof IDotEnv]: ValidatorSpec<any> };

    const rule: DotEnvValidation = {
      API_BASE_PATH: envalid.str({ default: 'prod', devDefault: 'dev' }),
      API_PORT: envalid.port({ default: 3000 }),
      API_DEFAULT_STRATEGY: envalid.str({ default: 'jwt' }),
      DB_TYPE: envalid.str({ default: 'mysql' }),
      DB_DATABASE: envalid.str({ devDefault: 'dev' }),
      DB_HOST: envalid.str({ devDefault: 'localhost' }),
      DB_PASSWORD: envalid.str({ devDefault: '1234' }),
      DB_PORT: envalid.port({ default: 3306 }),
      DB_USER: envalid.str({ devDefault: 'root' }),
      DB_SYNCHRONIZE: envalid.bool({ default: false, devDefault: true }),
      DB_MIGRATIONS_RUN: envalid.bool({ default: true }),
      DB_TIMEOUT: envalid.num({ default: 20_000 }),
      JWT_EXPIRES_IN: envalid.str({ default: '7d' }),
      JWT_SECRET_KEY: envalid.str({ devDefault: 'CHANGE_THIS_SECRET' }),
      SWAGGER_DESCRIPTION: envalid.str({ default: 'Base API' }),
      SWAGGER_TAG: envalid.str({ default: 'Base' }),
      SWAGGER_TITLE: envalid.str({ default: 'Base' }),
      SWAGGER_VERSION: envalid.str({ default: '1.0' }),
    };

    const env = envalid.cleanEnv<IDotEnv>(process.env, rule, { dotEnvPath: dotEnvName });

    if (env.isProduction && env.DB_SYNCHRONIZE)
      throw new InternalServerErrorException('Por questões de segurança, não será inicializado a API em modo produção com a configuração DB_SYNCHRONIZE sendo verdadeira. Veja: https://github.com/typeorm/typeorm/blob/master/docs/faq.md#how-do-i-update-a-database-schema');

    return env;
  }

  //#endregion

}
