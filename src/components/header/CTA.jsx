/* eslint-disable no-unused-vars */
import React from 'react';
import { useTranslation } from 'react-i18next';
import TonnyCv from '../../assets/tonnysCv.pdf'

const CTA = () => {

  const [t, i18n] = useTranslation("globals");

  return (
    <div className='cta'>
        <a href={TonnyCv} download className='btn'>{t('cta.download')}</a>
        <a href='#contact' className='btn btn-primary'>{t('cta.letsTalk')}</a>
    </div>
  )
}

export default CTA