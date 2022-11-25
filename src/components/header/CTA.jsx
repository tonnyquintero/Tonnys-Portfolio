/* eslint-disable no-unused-vars */
import React from 'react';
import { useTranslation } from 'react-i18next';
import TonnyCv from '../../assets/tonnysCv.pdf'

const CTA = () => {

  const [t, i18n] = useTranslation("globals");

  return (
    <div className='cta'>
        <a href={TonnyCv} download className='btn2'>{t('cta.download')}</a>
        <a href='#contact' className='btn-primary2'>{t('cta.letsTalk')}</a>
    </div>
  )
}

export default CTA