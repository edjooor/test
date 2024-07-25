import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

const DynamicTable = () => {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      rows: [{ sector: '', antennaType: '', quantity: '', azimuth: '', tiltAngle: '', ret: '', blockType: '' }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'rows',
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <table>
        <thead>
          <tr>
            <th>Сектор</th>
            <th>Тип антенн БС</th>
            <th>Кол-во</th>
            <th>Азимут</th>
            <th>Угол наклона</th>
            <th>Наличие Ret</th>
            <th>Тип выносного блока</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((item, index) => (
            <tr key={item.id}>
              <td>
                <input {...register(`rows.${index}.sector`)} />
              </td>
              <td>
                <input {...register(`rows.${index}.antennaType`)} />
              </td>
              <td>
                <input type="number" {...register(`rows.${index}.quantity`)} />
              </td>
              <td>
                <input {...register(`rows.${index}.azimuth`)} />
              </td>
              <td>
                <input {...register(`rows.${index}.tiltAngle`)} />
              </td>
              <td>
                <select {...register(`rows.${index}.ret`)}>
                  <option value="да">да</option>
                  <option value="нет">нет</option>
                </select>
              </td>
              <td>
                <input {...register(`rows.${index}.blockType`)} />
              </td>
              <td>
                <button type="button" onClick={() => remove(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" onClick={() => append({ sector: '', antennaType: '', quantity: '', azimuth: '', tiltAngle: '', ret: '', blockType: '' })}>
        +
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicTable;
