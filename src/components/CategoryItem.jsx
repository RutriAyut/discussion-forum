import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function CategoryItem({ category, disabled, keyword, onKeyword }) {
  if (onKeyword) {
    const click = category !== keyword ? 'outline-primary' : 'primary';
    return (
      <Button type='button' variant={`${click}`} className='btn-category'
        onClick={() => onKeyword(category)}>
        #{category}
      </Button>
    );
  }

  return (
    <Button className='btn-category' disabled>#{category}</Button>
  );
}

export default CategoryItem;

CategoryItem.propTypes = {
  /** Category yang ditampilkan */
  category: PropTypes.string.isRequired,
  /** Button Category yang tidak bisa di click */
  disabled: PropTypes.bool,
  /** Keyword Category yang sedang aktif */
  keyword: PropTypes.string,
  /** Funsi untuk mensortir Thread sesuai Kategori */
  onKeyword: PropTypes.func,
};
