/**
 * NOTE: Read more about the <Head /> component here: https://nextjs.org/docs/old#populating-head
 *
 * The contents of <head> get cleared upon unmounting the component, so make sure each page
 * completely defines what it needs in <head>, without making assumptions about what other pages
 * added.
 *
 * <title> and <meta> elements need to be contained as direct children of the <Head> element, or
 * wrapped into maximum one level of <React.Fragment>, otherwise the metatags won't be correctly
 * picked up on clientside navigation.
 */

 import React from 'react';
 import Head from 'next/head';
 
 import { isEmpty, isDef } from '../../utils/core';
 
 export const BaseMeta = ({ metadata }) => {
     const { title, description } = metadata;
 
     return (
         <Head>
             <meta key="description" name="description" content={description} />
             <meta key="viewport" name="viewport" content="initial-scale=1.0, width=device-width" />
             <meta name="cg:title" content={title} />
         </Head>
     );
 };
 
 const getFacebookMetadata = (metadata) => {
     const { facebook } = metadata;
 
     if (!isDef(facebook) || isEmpty(facebook)) {
         return {};
     }
 
     const {
         title,
         imageUrl,
         description,
     } = facebook;
 
     return {
         title,
         imageUrl,
         description,
     };
 };
 
 export const OpenGraphMeta = ({ metadata, canonicalUrl }) => {
     const { title, description, imageUrl } = getFacebookMetadata(metadata);
 
     return (
         <Head>
             <meta property="og:url" content={`${canonicalUrl}${/\?/.test(canonicalUrl) ? '&' : '?'}rel=share`} />
             <meta property="og:title" content={title} />
             <meta property="og:type" content="website" />
             <meta property="og:description" content={description} />
             <meta key="og:image" property="og:image" content={imageUrl} />
             <meta property="og:image:width" content="450" />
             <meta property="og:image:height" content="298" />
         </Head>
     );
 };
 
 const getTwitterMetadata = (metadata) => {
     const { twitter } = metadata;
 
     if (!isDef(twitter) || isEmpty(twitter)) {
         return {};
     }
 
     const {
         title,
         imageUrl,
         description,
     } = twitter;
 
     return {
         title,
         imageUrl,
         description,
     };
 };
 
 export const TwitterMeta = ({ metadata }) => {
     const { title, description, imageUrl } = getTwitterMetadata(metadata);
 
     return (
         <Head>
             <meta name="twitter:title" content={title} />
             <meta name="twitter:description" content={description} />
             <meta name="twitter:image" content={imageUrl} />
             <meta name="twitter:card" content="summary_large_image" />
         </Head>
     );
 };
