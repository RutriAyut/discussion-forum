import React from 'react';
import CategoryItem from './CategoryItem';
import PropTypes from 'prop-types';

function CategoriesList({ categories, keyword, onKeyword }) {
  return (
    <div className='categories-list'>
      <p className='mb-2'>Filter Berdasarkan Kategori :</p>
      <div className='d-flex gap-2'>
        {
          categories.map((category) => (
            <CategoryItem key={category} keyword={keyword} onKeyword={onKeyword} category={category} />
          ))
        }
      </div>
    </div>
  );
}

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  keyword: PropTypes.string.isRequired,
  onKeyword: PropTypes.func.isRequired,
};

export default CategoriesList;
