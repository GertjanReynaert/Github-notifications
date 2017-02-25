// @flow
import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { white, blue } from '../colors';

const styles = StyleSheet.create({
  segmentedGroup: {
    flexDirection: 'row',
    height: 30,

    borderWidth: StyleSheet.hairlineWidth,
    borderColor: blue,
    marginLeft: 15,
    marginRight: 15,
  },
  segmentedControl: {
    flex: 1,
    borderRightWidth: StyleSheet.hairlineWidth,
    borderColor: blue,
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 5,
  },
  active: {
    backgroundColor: blue,
  },
  activeText: {
    color: white,
  },
});

type Props = {
  values: Array<string>,
  selectedIndex: number,
  onChange: () => void,
};

class SegmentedControl extends Component {
  props: Props

  render() {
    return (
      <View style={styles.segmentedGroup}>
        {
          this.props.values.map((value, index) => {
            const isActive = this.props.selectedIndex === index;
            const controllClass = [
              styles.segmentedControl,
              isActive ? styles.active : null,
            ];
            const textClass = isActive ? styles.activeText : null;

            return (
              <TouchableOpacity
                key={value}
                style={controllClass}
                onPress={() => this.props.onChange(index)}
              >
                <Text style={textClass}>{value}</Text>
              </TouchableOpacity>
            );
          })
        }
      </View>
    );
  }
}

export default SegmentedControl;
