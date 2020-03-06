/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import './WelcomePage.css';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  getCategories,
  changeCategoryId
} from '../../redux/actions/categoryActions';
import { removePersist } from '../../redux/actions/questionsActions';

import { Select, Button } from 'antd';

const { Option } = Select;

const WelcomePage = props => {
  const { getCategories, categories, changeCategoryId, removePersist } = props;

  useEffect(() => {
    getCategories();
    removePersist();
  }, []);

  const onChange = value => {
    changeCategoryId(value);
  };

  const onSearch = value => {};

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div>
        <Select
          showSearch
          style={{ width: 300 }}
          placeholder="Select a category"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
            0
          }
        >
          {categories &&
            categories.map(category => (
              <Option value={category.id} key={category.id}>
                {category.name}
              </Option>
            ))}
        </Select>
      </div>
      <div style={{ paddingTop: 20 }}>
        <Link to={'/quiz'}>
          <Button type="primary" style={{ width: 300 }}>
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const { categories } = state.categories;
  const { categoryId } = state.changeCategoryId;

  return { categories, categoryId };
};

const mapDispatchToProps = {
  getCategories,
  changeCategoryId,
  removePersist
};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);
