import React, {forwardRef} from 'react';
import {BottomSheetStyles} from './BottomSheet.styles';
import RBSheet from 'react-native-raw-bottom-sheet';

const BottomSheet = forwardRef(({children}, ref) => {
  return (
    <RBSheet
      ref={ref}
      height={250}
      openDuration={250}
      customStyles={BottomSheetStyles}
    >
      {children}
    </RBSheet>
  );
});

export default BottomSheet;