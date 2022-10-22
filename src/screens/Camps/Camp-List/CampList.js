import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import Result from './Result/Result';
import {useSelector, useDispatch} from 'react-redux';
import {getCamps, reset} from '../../../features/CampGrounds/CampGroundSlice';

const CampList = () => {
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

  console.log('Camps in camps list ===', camps.data);

  return (
    <View>
      <Result camps={camps?.data} totalRecordCount={camps?.totalRecordCount} />
    </View>
  );
};

export default CampList;

const styles = StyleSheet.create({});
