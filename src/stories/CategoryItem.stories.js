import { fn } from '@storybook/test';
import CategoryItem from '../components/CategoryItem';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const meta = {
  title: 'Components/Categories',
  component: CategoryItem,
};

export default meta;

export const ButtonDisabled = {
  args: {
    keyword: '',
    category: 'Category 1',
  },
};

export const ButtonOutlinePrimary = {
  args: {
    keyword: '',
    category: 'Category 1',
    onKeyword: fn(),
  },
};

export const ButtonPrimary = {
  args: {
    keyword: 'Category 1',
    category: 'Category 1',
    onKeyword: fn(),
  },
};
