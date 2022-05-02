import { View, Text } from 'react-native'
import React, { useState } from 'react'

import * as Yup from 'yup'
import { formik } from 'formik'

const PlaceHolderImg='https://img.icons8.com/small/16/ffffff/settings-system-daydream.png'

const UploadPostSchema =Yup.object().shape({
    imageUrl:Yup.string().url().required('A URL is required'),
    caption:Yup.string().max(2200, 'caption has reached the charecter')
})

const FormikPostUploader = () => {

    const [thumNailUrl, setThumnailUrl]=useState(PlaceHolderImg)

  return (
    <View>
      <Text style={{color:'white'}}>Formik Post Uploader</Text>
    </View>
  )
}

export default FormikPostUploader