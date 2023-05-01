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
