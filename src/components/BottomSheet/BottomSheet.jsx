import React, {forwardRef} from 'react';
import {BottomSheetStyles} from './BottomSheet.styles';
import RBSheet from 'react-native-raw-bottom-sheet';

const BottomSheet = forwardRef(({children, height = 250}, ref) => {
  return (
    <RBSheet
      ref={ref}
      height={height}
      openDuration={250}
      customStyles={BottomSheetStyles}
    >
      {children}
    </RBSheet>
  );
});

export default BottomSheet;