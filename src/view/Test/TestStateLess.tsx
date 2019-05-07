import React, { SFC } from 'react';
import { Button, NativeSyntheticEvent, NativeTouchEvent } from 'react-native';

type Props = {
  title: string;
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
};

const TestStateLess: SFC<Props> = (props) => (
  <Button onPress={props.onPress} title={props.title} />
);

export default TestStateLess;