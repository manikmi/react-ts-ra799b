import React, { useEffect, useState } from 'react';
import GenericInput from './GenericInput.react';

export default ({ name }) => {
  const [dictProps, setDictProps] = useState<any>({
    dict_params: [
      {
        id: 'prop1',
        label: 'Property1',
        value: 'Value1',
      },
      {
        id: 'prop2',
        label: 'Property2',
        value: 'Value2',
      },
    ],
  });
  return (
    <>
      <h1>Hello {name}!</h1>
      <GenericInput
        dictProps={dictProps}
        onChange={(id: string, name: string, value: string) => {
          let dictParam = { ...dictProps };
          dictParam.dict_params.find((param) => {
            return param.id == id;
          }).value = value;
          setDictProps(dictParam);
        }}
        type="dict"
      />
    </>
  );
};
