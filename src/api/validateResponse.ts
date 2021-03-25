import { AxiosResponse } from 'axios';
import { PathReporter } from 'io-ts/lib/PathReporter';
import * as t from 'io-ts';
import { isLeft } from 'fp-ts/lib/These';

function validateResponse<StaticType, RuntimeType>(
  validator: t.Type<StaticType, RuntimeType>,
) {
  return ({ data }: AxiosResponse) => {
    const maybeResult = validator.decode(data);

    if (isLeft(maybeResult)) {
      return {
        result: null,
        errors: PathReporter.report(maybeResult),
      };
    }

    return { result: maybeResult.right };
  };
}

export default validateResponse;
