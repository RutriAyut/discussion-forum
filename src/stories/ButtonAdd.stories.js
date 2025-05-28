import ButtonAdd from '../components/ButtonAdd';
import { fn } from '@storybook/test';
import '../styles/style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const meta = {
  title: 'Components/ButtonAdd',
  component: ButtonAdd,
  args: {
    onAddThread: fn(),
  },
};

export default meta;

export const ButtonOutline = {
  args: {
    primary: false,
  },
};

export const ButtonFill = {
  args: {
    primary: true,
  },
};
