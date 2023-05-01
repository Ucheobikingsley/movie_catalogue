import { validate, ValidationError } from 'class-validator';
import { ObjectLiteral, QueryRunner } from 'typeorm';
import { get, has, isObject, merge, each, isEmpty, set } from 'lodash';
import { Response } from 'express';
export const readValidatePostBody = async <T>(
  Dto: { new (): T },
  body: unknown,
  validationOptions: Parameters<typeof validate>[2] = undefined,
): Promise<[T, ValidationError[]]> => {
  let dto = new Dto();
  dto = merge(dto, body);
  const validationErrors = await validate(
    dto as ObjectLiteral,
    validationOptions,
  );
  return [dto, validationErrors];
};
