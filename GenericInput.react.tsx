import React from 'react';
type DictProps = {
  dict_params: any[];
};
type GenericInputProps = {
  type: string;
  dictProps?: DictProps;
  onChange: (id: string, name: string, value: string) => void;
};

const GenericInput = (props: GenericInputProps) => {
  const { type, dictProps, onChange } = props;
  const DictInput = (dictProps: any) => {
    return (
      <>
        {dictProps.dict_params.map((param: any) => {
          return (
            <input
              key={param.id}
              {...param}
              onChange={(e) => {
                let val = e.target.value;
                onChange(param.id, 'name', val);
              }}
              style={{marginRight:'3px'}}
            />
          );
        })}
      </>
    );
  };
  //return <>{type === 'dict' ? <div>{dictProps}</div> : <></>}</>;
  return <DictInput {...dictProps}>{type}</DictInput>;
};
export default GenericInput;
