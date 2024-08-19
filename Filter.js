// src/components/Filter.js
import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../redux/actions';

const Filter = ({ currentFilter, setFilter }) => {
  const filters = ['ALL', 'ACTIVE', 'COMPLETED'];

  return (
    <div>
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setFilter(filter)}
          disabled={currentFilter === filter}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentFilter: state.filter,
});

export default connect(mapStateToProps, { setFilter })(Filter);
