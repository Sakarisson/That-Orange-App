import { AxiosResponse } from 'axios';
import { PathReporter } from 'io-ts/lib/PathReporter';
import * as t from 'io-ts';
import { isLeft } from 'fp-ts/lib/These';

type ValidResponse<T> = {
  result: T;
};

type InvalidResponse = {
  result: null;
  errors: Array<string>;
};

type ValidatedResponse<T> = ValidResponse<T> | InvalidResponse;

function validate<StaticType, RuntimeType>(
  { data }: AxiosResponse,
  runtimeType: t.Type<StaticType, RuntimeType>,
): ValidatedResponse<StaticType> {
  const maybeResult = runtimeType.decode(data);

  if (isLeft(maybeResult)) {
    return {
      result: null,
      errors: PathReporter.report(maybeResult),
    };
  }

  return { result: maybeResult.right };
}

export default validate;
