import { FocusEvent } from 'react';
import _ from 'lodash';

export const handlerFactory =
  (original: object, onChange: (copy: any) => void) =>
  (path: string, format: (value: string) => string | number | boolean | null = (value) => value) =>
  (event: FocusEvent<HTMLInputElement>): void => {
    const copy = _.cloneDeep(original);
    onChange(_.set(copy, path, format(event.currentTarget.value)));
  };
