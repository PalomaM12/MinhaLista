import React, { forwardRef, Fragment, LegacyRef } from "react";
import { View, Text, TextInput, TextInputProps, TouchableOpacity } from "react-native";
import { style } from "./styles";
import { themas } from "../../global/themes";
import { MaterialIcons, FontAwesome, Octicons } from '@expo/vector-icons';


type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
                     React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
                     React.ComponentType<React.ComponentProps<typeof Octicons>>;


type props = TextInputProps & {
    IconLeft?: IconComponent,
    IconRight?: IconComponent,
    iconLeftName?: string,
    iconRightName?: string,
    title?: string,
    onIconLeftPress?: () => void,
    onIconRigthtPress?: () => void
}


export const Input = forwardRef((Props: props, ref: LegacyRef<TextInput> | null)=>{
  const {IconLeft,IconRight, iconLeftName,iconRightName, title, onIconLeftPress, onIconRigthtPress,...rest} = Props


  const calculateSizeWidth = () =>{
    if(IconLeft && IconRight){
        return '80%'
    }else if(IconLeft || IconRight){
        return '90%'
    }else{
        return '100%'
    }
  }  
const calculateSizePaddingLeft = () => {
    if(IconLeft && IconLeft) {
        return 0;
    }else if (IconLeft || IconRight) {
        return 10;
    } else {
        return 20;
    }
}




    return(
  <Fragment>
    <Text style={style.titleInput}>{title}</Text>
    <View style ={[style.BoxInput, {paddingLeft:calculateSizePaddingLeft()}]}>
        {IconLeft && iconLeftName &&(
             <TouchableOpacity onPress={onIconLeftPress} style={style.Button}>
            <IconLeft name={iconLeftName as any} size={20} color={themas.colors.gray} style={style.Icon}>
            </IconLeft>
        </TouchableOpacity>
        )}
   
        <TextInput
          style={[
            style.input,{width:calculateSizeWidth() }
        ]}
          {...rest}
        />
        {IconRight && iconRightName &&(
             <TouchableOpacity onPress={onIconRigthtPress} style={style.Button}>
            <IconRight name={iconRightName as any} size={20} color={themas.colors.gray} style={style.Icon}>
            </IconRight>
        </TouchableOpacity>
        )}
   
    </View>
    </Fragment>
    )
})
