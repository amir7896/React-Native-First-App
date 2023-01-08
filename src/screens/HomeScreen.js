import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getCamps, reset} from '../features/CampGrounds/CampGroundSlice';
import {CampList} from './Camps';
import PagerView from 'react-native-pager-view';

const HomeScreen = props => {
  const dispatch = useDispatch();

  const {camps, message, isLoading, isError, isSuccess} = useSelector(
    state => state.camps,
  );
  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    dispatch(getCamps());
    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);

  // console.log('Campgrounds ===', camps?.data);

  return <CampList data={camps?.data} {...props} />;
};

export default HomeScreen;

const styles = StyleSheet.create({
  pagerview: {
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: '#2C0145',
  },
});
