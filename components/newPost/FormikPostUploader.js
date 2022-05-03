import { View, Text, Image, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

import * as Yup from 'yup'
import { Formik } from 'formik'
import { Divider } from 'react-native-elements'
import validUrl from 'valid-url'

const PlaceHolderImg = 'http://placehold.jp/150x150.png'

const UploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required('A URL is required'),
  caption: Yup.string().max(2200, 'caption has reached the charecter')
})

const FormikPostUploader = ({ navigation }) => {

  const [thumNailUrl, setThumnailUrl] = useState(PlaceHolderImg)

  return (
    <Formik
      initialValues={{ caption: '', imageUrl: '' }}
      onSubmit={(values) => {
        console.log(values)
        console.log('Your post was submited successfully')
        navigation.goBack()
      }}
      validationSchema={UploadPostSchema}
      validateOnMount={true}>
      {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) =>
        <>
          <View style={{
            margin: 20,
            justifyContent: 'space-between',
            flexDirection: 'row'
          }} >
            <Image source={{ uri: validUrl.isUri(thumNailUrl) ? thumNailUrl : PlaceHolderImg }}
              style={{ width: 100, height: 100 }} />

            <View style={{ flex: 1, marginLeft: 12 }}>
              <TextInput placeholder='Write a caption...'
                placeholderTextColor='gray'
                multiline={true} style={{ color: 'white', fontSize: 20 }}
                onChangeText={handleChange('caption')}
                onBlur={handleBlur('caption')}
                value={values.caption} />
            </View>

          </View>
          <Divider width={0.2} orientation={'vertical'} />
          <TextInput
            onChange={e => setThumnailUrl(e.nativeEvent.text)}
            placeholder='Enter image url'
            placeholderTextColor='gray'
            style={{ color: 'white', fontSize: 20 }}
            onChangeText={handleChange('imageUrl')}
            onBlur={handleBlur('imageUrl')}
            value={values.imageUrl} />
          {errors.imageUrl && (
            <Text style={{ fontSize: 10, color: 'red' }} >{errors.imageUrl}</Text>
          )}

          <Button onPress={handleSubmit} title="Share" disabled={!isValid} />
        </>
      }
    </Formik>
  )
}

export default FormikPostUploader