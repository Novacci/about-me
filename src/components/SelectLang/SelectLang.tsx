import polishFlag from '../../assets/flags/poland.png';
import englishFlag from '../../assets/flags/united-kingdom.png';
import styles from './SelectLang.module.scss';
import Select, { SingleValue } from 'react-select';
import { useTranslation } from 'react-i18next';

const options = [
  {
    value: 'pl',
    label: (
      <img className={styles['flag-style']} src={polishFlag} alt="polish" />
    ),
  },
  {
    value: 'en',
    label: (
      <img className={styles['flag-style']} src={englishFlag} alt="english" />
    ),
  },
];

const SelectLang = () => {
  const { i18n } = useTranslation();

  const changeLanguageHandler = (
    event: SingleValue<{ value: string; label: JSX.Element }>
  ) => {
    console.log(event);
    if (event) {
      i18n.changeLanguage(event.value);
    }
  };

  return (
    <>
      <Select
        onChange={changeLanguageHandler}
        options={options}
        className={styles['react-select-container']}
        defaultValue={options[1]}
        isSearchable={false}
      />
    </>
  );
};

export default SelectLang;
