// Import context
import { useFormContext } from 'globalState';
// Import components
import AutoComplete from 'components/shared/AutoComplete/AutoComplete';

const BusAutoComplete = ({ id, label, name }: { id: string; label?: string; name: string }) => {
  const [{ busQuery }, formDispatch] = useFormContext();

  // set query state on input change
  const onUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    formDispatch({ type: 'UPDATE_BUS_QUERY', payload: e.target.value });
  };

  return (
    <AutoComplete
      id={id}
      label={label}
      name={name}
      placeholder="Search"
      onUpdate={onUpdate}
      initialQuery={busQuery || ''}
    />
  );
};

export default BusAutoComplete;
