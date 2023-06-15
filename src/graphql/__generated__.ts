import type { GraphQLClient } from 'graphql-request';
import type * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';

export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  I18NLocaleCode: any;
  JSON: any;
  Upload: any;
};

export type BooleanFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']>>>;
  readonly contains: InputMaybe<Scalars['Boolean']>;
  readonly containsi: InputMaybe<Scalars['Boolean']>;
  readonly endsWith: InputMaybe<Scalars['Boolean']>;
  readonly eq: InputMaybe<Scalars['Boolean']>;
  readonly eqi: InputMaybe<Scalars['Boolean']>;
  readonly gt: InputMaybe<Scalars['Boolean']>;
  readonly gte: InputMaybe<Scalars['Boolean']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']>>>;
  readonly lt: InputMaybe<Scalars['Boolean']>;
  readonly lte: InputMaybe<Scalars['Boolean']>;
  readonly ne: InputMaybe<Scalars['Boolean']>;
  readonly not: InputMaybe<BooleanFilterInput>;
  readonly notContains: InputMaybe<Scalars['Boolean']>;
  readonly notContainsi: InputMaybe<Scalars['Boolean']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']>;
  readonly null: InputMaybe<Scalars['Boolean']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']>>>;
  readonly startsWith: InputMaybe<Scalars['Boolean']>;
};

export type ComponentSettingsSectionBanner = {
  readonly __typename?: 'ComponentSettingsSectionBanner';
  readonly id: Scalars['ID'];
  readonly showVideo: Scalars['Boolean'];
};

export type ComponentUiButton = {
  readonly __typename?: 'ComponentUiButton';
  readonly href: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly label: Scalars['String'];
};

export type ComponentUiButtonFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiButtonFiltersInput>>>;
  readonly href: InputMaybe<StringFilterInput>;
  readonly label: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentUiButtonFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiButtonFiltersInput>>>;
};

export type ComponentUiButtonInput = {
  readonly href: InputMaybe<Scalars['String']>;
  readonly id: InputMaybe<Scalars['ID']>;
  readonly label: InputMaybe<Scalars['String']>;
};

export type ComponentUiDiscountCard = {
  readonly __typename?: 'ComponentUiDiscountCard';
  readonly description: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly title: Maybe<Scalars['String']>;
};

export type ComponentUiDiscountCardFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiDiscountCardFiltersInput>>>;
  readonly description: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentUiDiscountCardFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiDiscountCardFiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentUiDiscountCardInput = {
  readonly description: InputMaybe<Scalars['String']>;
  readonly id: InputMaybe<Scalars['ID']>;
  readonly title: InputMaybe<Scalars['String']>;
};

export type ComponentUiFigure = {
  readonly __typename?: 'ComponentUiFigure';
  readonly caption: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly image: UploadFileEntityResponse;
  readonly linkButton: Maybe<ReadonlyArray<Maybe<ComponentUiButton>>>;
};

export type ComponentUiFigureLinkButtonArgs = {
  filters: InputMaybe<ComponentUiButtonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type ComponentUiFigureFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiFigureFiltersInput>>>;
  readonly caption: InputMaybe<StringFilterInput>;
  readonly linkButton: InputMaybe<ComponentUiButtonFiltersInput>;
  readonly not: InputMaybe<ComponentUiFigureFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiFigureFiltersInput>>>;
};

export type ComponentUiFigureInput = {
  readonly caption: InputMaybe<Scalars['String']>;
  readonly id: InputMaybe<Scalars['ID']>;
  readonly image: InputMaybe<Scalars['ID']>;
  readonly linkButton: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiButtonInput>>>;
};

export type ComponentUiIconButton = {
  readonly __typename?: 'ComponentUiIconButton';
  readonly href: Maybe<Scalars['String']>;
  readonly icon: Enum_Componentuiiconbutton_Icon;
  readonly id: Scalars['ID'];
  readonly label: Maybe<Scalars['String']>;
};

export type ComponentUiIconButtonFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiIconButtonFiltersInput>>>;
  readonly href: InputMaybe<StringFilterInput>;
  readonly icon: InputMaybe<StringFilterInput>;
  readonly label: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentUiIconButtonFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiIconButtonFiltersInput>>>;
};

export type ComponentUiIconButtonInput = {
  readonly href: InputMaybe<Scalars['String']>;
  readonly icon: InputMaybe<Enum_Componentuiiconbutton_Icon>;
  readonly id: InputMaybe<Scalars['ID']>;
  readonly label: InputMaybe<Scalars['String']>;
};

export type ComponentUiLink = {
  readonly __typename?: 'ComponentUiLink';
  readonly href: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly label: Scalars['String'];
};

export type ComponentUiLinkFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiLinkFiltersInput>>>;
  readonly href: InputMaybe<StringFilterInput>;
  readonly label: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentUiLinkFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiLinkFiltersInput>>>;
};

export type ComponentUiLinkInput = {
  readonly href: InputMaybe<Scalars['String']>;
  readonly id: InputMaybe<Scalars['ID']>;
  readonly label: InputMaybe<Scalars['String']>;
};

export type ComponentUiLinkList = {
  readonly __typename?: 'ComponentUiLinkList';
  readonly id: Scalars['ID'];
  readonly link: Maybe<ReadonlyArray<Maybe<ComponentUiLink>>>;
  readonly title: Maybe<Scalars['String']>;
};

export type ComponentUiLinkListLinkArgs = {
  filters: InputMaybe<ComponentUiLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type ComponentUiLinkListFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiLinkListFiltersInput>>>;
  readonly link: InputMaybe<ComponentUiLinkFiltersInput>;
  readonly not: InputMaybe<ComponentUiLinkListFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiLinkListFiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentUiLinkListInput = {
  readonly id: InputMaybe<Scalars['ID']>;
  readonly link: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiLinkInput>>>;
  readonly title: InputMaybe<Scalars['String']>;
};

export type Country = {
  readonly __typename?: 'Country';
  readonly code2: Scalars['String'];
  readonly code3: Scalars['String'];
  readonly createdAt: Maybe<Scalars['DateTime']>;
  readonly language: Maybe<LanguageEntityResponse>;
  readonly page_home: Maybe<PageHomeEntityResponse>;
  readonly publishedAt: Maybe<Scalars['DateTime']>;
  readonly updatedAt: Maybe<Scalars['DateTime']>;
};

export type CountryEntity = {
  readonly __typename?: 'CountryEntity';
  readonly attributes: Maybe<Country>;
  readonly id: Maybe<Scalars['ID']>;
};

export type CountryEntityResponse = {
  readonly __typename?: 'CountryEntityResponse';
  readonly data: Maybe<CountryEntity>;
};

export type CountryEntityResponseCollection = {
  readonly __typename?: 'CountryEntityResponseCollection';
  readonly data: ReadonlyArray<CountryEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type CountryFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<CountryFiltersInput>>>;
  readonly code2: InputMaybe<StringFilterInput>;
  readonly code3: InputMaybe<StringFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly language: InputMaybe<LanguageFiltersInput>;
  readonly not: InputMaybe<CountryFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<CountryFiltersInput>>>;
  readonly page_home: InputMaybe<PageHomeFiltersInput>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type CountryInput = {
  readonly code2: InputMaybe<Scalars['String']>;
  readonly code3: InputMaybe<Scalars['String']>;
  readonly language: InputMaybe<Scalars['ID']>;
  readonly page_home: InputMaybe<Scalars['ID']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly contains: InputMaybe<Scalars['DateTime']>;
  readonly containsi: InputMaybe<Scalars['DateTime']>;
  readonly endsWith: InputMaybe<Scalars['DateTime']>;
  readonly eq: InputMaybe<Scalars['DateTime']>;
  readonly eqi: InputMaybe<Scalars['DateTime']>;
  readonly gt: InputMaybe<Scalars['DateTime']>;
  readonly gte: InputMaybe<Scalars['DateTime']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly lt: InputMaybe<Scalars['DateTime']>;
  readonly lte: InputMaybe<Scalars['DateTime']>;
  readonly ne: InputMaybe<Scalars['DateTime']>;
  readonly not: InputMaybe<DateTimeFilterInput>;
  readonly notContains: InputMaybe<Scalars['DateTime']>;
  readonly notContainsi: InputMaybe<Scalars['DateTime']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']>;
  readonly null: InputMaybe<Scalars['Boolean']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly startsWith: InputMaybe<Scalars['DateTime']>;
};

export enum Enum_Componentuiiconbutton_Icon {
  Cart = 'cart',
  Converse = 'converse',
  Jordan = 'jordan',
  Like = 'like'
}

export enum Enum_Type_Name {
  MenSShoes = 'Men_s_Shoes',
  WomenSShoes = 'Women_s_Shoes'
}

export type FileInfoInput = {
  readonly alternativeText: InputMaybe<Scalars['String']>;
  readonly caption: InputMaybe<Scalars['String']>;
  readonly name: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  readonly contains: InputMaybe<Scalars['Float']>;
  readonly containsi: InputMaybe<Scalars['Float']>;
  readonly endsWith: InputMaybe<Scalars['Float']>;
  readonly eq: InputMaybe<Scalars['Float']>;
  readonly eqi: InputMaybe<Scalars['Float']>;
  readonly gt: InputMaybe<Scalars['Float']>;
  readonly gte: InputMaybe<Scalars['Float']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  readonly lt: InputMaybe<Scalars['Float']>;
  readonly lte: InputMaybe<Scalars['Float']>;
  readonly ne: InputMaybe<Scalars['Float']>;
  readonly not: InputMaybe<FloatFilterInput>;
  readonly notContains: InputMaybe<Scalars['Float']>;
  readonly notContainsi: InputMaybe<Scalars['Float']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']>;
  readonly null: InputMaybe<Scalars['Boolean']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  readonly startsWith: InputMaybe<Scalars['Float']>;
};

export type GenericMorph =
  | ComponentSettingsSectionBanner
  | ComponentUiButton
  | ComponentUiDiscountCard
  | ComponentUiFigure
  | ComponentUiIconButton
  | ComponentUiLink
  | ComponentUiLinkList
  | Country
  | I18NLocale
  | Language
  | LayoutFooter
  | LayoutHeader
  | LayoutPreHeader
  | LayoutSubfooter
  | PageHome
  | SectionBanner
  | SectionDiscount
  | SectionMembership
  | SectionTrend
  | Shoe
  | Size
  | Type
  | UploadFile
  | UploadFolder
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser;

export type I18NLocale = {
  readonly __typename?: 'I18NLocale';
  readonly code: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['DateTime']>;
  readonly name: Maybe<Scalars['String']>;
  readonly updatedAt: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  readonly __typename?: 'I18NLocaleEntity';
  readonly attributes: Maybe<I18NLocale>;
  readonly id: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  readonly __typename?: 'I18NLocaleEntityResponse';
  readonly data: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  readonly __typename?: 'I18NLocaleEntityResponseCollection';
  readonly data: ReadonlyArray<I18NLocaleEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<I18NLocaleFiltersInput>>>;
  readonly code: InputMaybe<StringFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<I18NLocaleFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<I18NLocaleFiltersInput>>>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  readonly contains: InputMaybe<Scalars['ID']>;
  readonly containsi: InputMaybe<Scalars['ID']>;
  readonly endsWith: InputMaybe<Scalars['ID']>;
  readonly eq: InputMaybe<Scalars['ID']>;
  readonly eqi: InputMaybe<Scalars['ID']>;
  readonly gt: InputMaybe<Scalars['ID']>;
  readonly gte: InputMaybe<Scalars['ID']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  readonly lt: InputMaybe<Scalars['ID']>;
  readonly lte: InputMaybe<Scalars['ID']>;
  readonly ne: InputMaybe<Scalars['ID']>;
  readonly not: InputMaybe<IdFilterInput>;
  readonly notContains: InputMaybe<Scalars['ID']>;
  readonly notContainsi: InputMaybe<Scalars['ID']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']>;
  readonly null: InputMaybe<Scalars['Boolean']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  readonly startsWith: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly contains: InputMaybe<Scalars['Int']>;
  readonly containsi: InputMaybe<Scalars['Int']>;
  readonly endsWith: InputMaybe<Scalars['Int']>;
  readonly eq: InputMaybe<Scalars['Int']>;
  readonly eqi: InputMaybe<Scalars['Int']>;
  readonly gt: InputMaybe<Scalars['Int']>;
  readonly gte: InputMaybe<Scalars['Int']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly lt: InputMaybe<Scalars['Int']>;
  readonly lte: InputMaybe<Scalars['Int']>;
  readonly ne: InputMaybe<Scalars['Int']>;
  readonly not: InputMaybe<IntFilterInput>;
  readonly notContains: InputMaybe<Scalars['Int']>;
  readonly notContainsi: InputMaybe<Scalars['Int']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']>;
  readonly null: InputMaybe<Scalars['Boolean']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly startsWith: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']>>>;
  readonly contains: InputMaybe<Scalars['JSON']>;
  readonly containsi: InputMaybe<Scalars['JSON']>;
  readonly endsWith: InputMaybe<Scalars['JSON']>;
  readonly eq: InputMaybe<Scalars['JSON']>;
  readonly eqi: InputMaybe<Scalars['JSON']>;
  readonly gt: InputMaybe<Scalars['JSON']>;
  readonly gte: InputMaybe<Scalars['JSON']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']>>>;
  readonly lt: InputMaybe<Scalars['JSON']>;
  readonly lte: InputMaybe<Scalars['JSON']>;
  readonly ne: InputMaybe<Scalars['JSON']>;
  readonly not: InputMaybe<JsonFilterInput>;
  readonly notContains: InputMaybe<Scalars['JSON']>;
  readonly notContainsi: InputMaybe<Scalars['JSON']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']>;
  readonly null: InputMaybe<Scalars['Boolean']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']>>>;
  readonly startsWith: InputMaybe<Scalars['JSON']>;
};

export type Language = {
  readonly __typename?: 'Language';
  readonly code: Scalars['String'];
  readonly createdAt: Maybe<Scalars['DateTime']>;
  readonly name: Scalars['String'];
  readonly publishedAt: Maybe<Scalars['DateTime']>;
  readonly updatedAt: Maybe<Scalars['DateTime']>;
};

export type LanguageEntity = {
  readonly __typename?: 'LanguageEntity';
  readonly attributes: Maybe<Language>;
  readonly id: Maybe<Scalars['ID']>;
};

export type LanguageEntityResponse = {
  readonly __typename?: 'LanguageEntityResponse';
  readonly data: Maybe<LanguageEntity>;
};

export type LanguageEntityResponseCollection = {
  readonly __typename?: 'LanguageEntityResponseCollection';
  readonly data: ReadonlyArray<LanguageEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type LanguageFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<LanguageFiltersInput>>>;
  readonly code: InputMaybe<StringFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<LanguageFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<LanguageFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type LanguageInput = {
  readonly code: InputMaybe<Scalars['String']>;
  readonly name: InputMaybe<Scalars['String']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']>;
};

export type LayoutFooter = {
  readonly __typename?: 'LayoutFooter';
  readonly createdAt: Maybe<Scalars['DateTime']>;
  readonly links: ReadonlyArray<Maybe<ComponentUiLinkList>>;
  readonly locale: Maybe<Scalars['String']>;
  readonly localizations: Maybe<LayoutFooterRelationResponseCollection>;
  readonly mainLinks: Maybe<ComponentUiLinkList>;
  readonly publishedAt: Maybe<Scalars['DateTime']>;
  readonly socilas: Scalars['JSON'];
  readonly supportLinks: Maybe<ComponentUiLinkList>;
  readonly title: Maybe<Scalars['String']>;
  readonly updatedAt: Maybe<Scalars['DateTime']>;
};

export type LayoutFooterLinksArgs = {
  filters: InputMaybe<ComponentUiLinkListFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type LayoutFooterLocalizationsArgs = {
  filters: InputMaybe<LayoutFooterFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type LayoutFooterEntity = {
  readonly __typename?: 'LayoutFooterEntity';
  readonly attributes: Maybe<LayoutFooter>;
  readonly id: Maybe<Scalars['ID']>;
};

export type LayoutFooterEntityResponse = {
  readonly __typename?: 'LayoutFooterEntityResponse';
  readonly data: Maybe<LayoutFooterEntity>;
};

export type LayoutFooterEntityResponseCollection = {
  readonly __typename?: 'LayoutFooterEntityResponseCollection';
  readonly data: ReadonlyArray<LayoutFooterEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type LayoutFooterFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<LayoutFooterFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly links: InputMaybe<ComponentUiLinkListFiltersInput>;
  readonly locale: InputMaybe<StringFilterInput>;
  readonly localizations: InputMaybe<LayoutFooterFiltersInput>;
  readonly mainLinks: InputMaybe<ComponentUiLinkListFiltersInput>;
  readonly not: InputMaybe<LayoutFooterFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<LayoutFooterFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly socilas: InputMaybe<JsonFilterInput>;
  readonly supportLinks: InputMaybe<ComponentUiLinkListFiltersInput>;
  readonly title: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type LayoutFooterInput = {
  readonly links: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiLinkListInput>>>;
  readonly mainLinks: InputMaybe<ComponentUiLinkListInput>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']>;
  readonly socilas: InputMaybe<Scalars['JSON']>;
  readonly supportLinks: InputMaybe<ComponentUiLinkListInput>;
  readonly title: InputMaybe<Scalars['String']>;
};

export type LayoutFooterRelationResponseCollection = {
  readonly __typename?: 'LayoutFooterRelationResponseCollection';
  readonly data: ReadonlyArray<LayoutFooterEntity>;
};

export type LayoutHeader = {
  readonly __typename?: 'LayoutHeader';
  readonly cartIconButton: ComponentUiIconButton;
  readonly createdAt: Maybe<Scalars['DateTime']>;
  readonly favoritesIconButton: ComponentUiIconButton;
  readonly kidsLinkList: ReadonlyArray<Maybe<ComponentUiLinkList>>;
  readonly kidsTitle: Scalars['String'];
  readonly locale: Maybe<Scalars['String']>;
  readonly localizations: Maybe<LayoutHeaderRelationResponseCollection>;
  readonly menLinkList: Maybe<ReadonlyArray<Maybe<ComponentUiLinkList>>>;
  readonly menTitle: Scalars['String'];
  readonly newLinkList: ReadonlyArray<Maybe<ComponentUiLinkList>>;
  readonly newTitle: Scalars['String'];
  readonly publishedAt: Maybe<Scalars['DateTime']>;
  readonly title: Maybe<Scalars['String']>;
  readonly updatedAt: Maybe<Scalars['DateTime']>;
  readonly womenLinkList: ReadonlyArray<Maybe<ComponentUiLinkList>>;
  readonly womenTitle: Scalars['String'];
};

export type LayoutHeaderKidsLinkListArgs = {
  filters: InputMaybe<ComponentUiLinkListFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type LayoutHeaderLocalizationsArgs = {
  filters: InputMaybe<LayoutHeaderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type LayoutHeaderMenLinkListArgs = {
  filters: InputMaybe<ComponentUiLinkListFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type LayoutHeaderNewLinkListArgs = {
  filters: InputMaybe<ComponentUiLinkListFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type LayoutHeaderWomenLinkListArgs = {
  filters: InputMaybe<ComponentUiLinkListFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type LayoutHeaderEntity = {
  readonly __typename?: 'LayoutHeaderEntity';
  readonly attributes: Maybe<LayoutHeader>;
  readonly id: Maybe<Scalars['ID']>;
};

export type LayoutHeaderEntityResponse = {
  readonly __typename?: 'LayoutHeaderEntityResponse';
  readonly data: Maybe<LayoutHeaderEntity>;
};

export type LayoutHeaderEntityResponseCollection = {
  readonly __typename?: 'LayoutHeaderEntityResponseCollection';
  readonly data: ReadonlyArray<LayoutHeaderEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type LayoutHeaderFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<LayoutHeaderFiltersInput>>>;
  readonly cartIconButton: InputMaybe<ComponentUiIconButtonFiltersInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly favoritesIconButton: InputMaybe<ComponentUiIconButtonFiltersInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly kidsLinkList: InputMaybe<ComponentUiLinkListFiltersInput>;
  readonly kidsTitle: InputMaybe<StringFilterInput>;
  readonly locale: InputMaybe<StringFilterInput>;
  readonly localizations: InputMaybe<LayoutHeaderFiltersInput>;
  readonly menLinkList: InputMaybe<ComponentUiLinkListFiltersInput>;
  readonly menTitle: InputMaybe<StringFilterInput>;
  readonly newLinkList: InputMaybe<ComponentUiLinkListFiltersInput>;
  readonly newTitle: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<LayoutHeaderFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<LayoutHeaderFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly title: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly womenLinkList: InputMaybe<ComponentUiLinkListFiltersInput>;
  readonly womenTitle: InputMaybe<StringFilterInput>;
};

export type LayoutHeaderInput = {
  readonly cartIconButton: InputMaybe<ComponentUiIconButtonInput>;
  readonly favoritesIconButton: InputMaybe<ComponentUiIconButtonInput>;
  readonly kidsLinkList: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiLinkListInput>>>;
  readonly kidsTitle: InputMaybe<Scalars['String']>;
  readonly menLinkList: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiLinkListInput>>>;
  readonly menTitle: InputMaybe<Scalars['String']>;
  readonly newLinkList: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiLinkListInput>>>;
  readonly newTitle: InputMaybe<Scalars['String']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']>;
  readonly title: InputMaybe<Scalars['String']>;
  readonly womenLinkList: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiLinkListInput>>>;
  readonly womenTitle: InputMaybe<Scalars['String']>;
};

export type LayoutHeaderRelationResponseCollection = {
  readonly __typename?: 'LayoutHeaderRelationResponseCollection';
  readonly data: ReadonlyArray<LayoutHeaderEntity>;
};

export type LayoutPreHeader = {
  readonly __typename?: 'LayoutPreHeader';
  readonly coverseIconButton: Maybe<ComponentUiIconButton>;
  readonly createdAt: Maybe<Scalars['DateTime']>;
  readonly jordanIconButton: Maybe<ComponentUiIconButton>;
  readonly links: ComponentUiLinkList;
  readonly locale: Maybe<Scalars['String']>;
  readonly localizations: Maybe<LayoutPreHeaderRelationResponseCollection>;
  readonly publishedAt: Maybe<Scalars['DateTime']>;
  readonly title: Scalars['String'];
  readonly updatedAt: Maybe<Scalars['DateTime']>;
};

export type LayoutPreHeaderLocalizationsArgs = {
  filters: InputMaybe<LayoutPreHeaderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type LayoutPreHeaderEntity = {
  readonly __typename?: 'LayoutPreHeaderEntity';
  readonly attributes: Maybe<LayoutPreHeader>;
  readonly id: Maybe<Scalars['ID']>;
};

export type LayoutPreHeaderEntityResponse = {
  readonly __typename?: 'LayoutPreHeaderEntityResponse';
  readonly data: Maybe<LayoutPreHeaderEntity>;
};

export type LayoutPreHeaderEntityResponseCollection = {
  readonly __typename?: 'LayoutPreHeaderEntityResponseCollection';
  readonly data: ReadonlyArray<LayoutPreHeaderEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type LayoutPreHeaderFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<LayoutPreHeaderFiltersInput>>>;
  readonly coverseIconButton: InputMaybe<ComponentUiIconButtonFiltersInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly jordanIconButton: InputMaybe<ComponentUiIconButtonFiltersInput>;
  readonly links: InputMaybe<ComponentUiLinkListFiltersInput>;
  readonly locale: InputMaybe<StringFilterInput>;
  readonly localizations: InputMaybe<LayoutPreHeaderFiltersInput>;
  readonly not: InputMaybe<LayoutPreHeaderFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<LayoutPreHeaderFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly title: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type LayoutPreHeaderInput = {
  readonly coverseIconButton: InputMaybe<ComponentUiIconButtonInput>;
  readonly jordanIconButton: InputMaybe<ComponentUiIconButtonInput>;
  readonly links: InputMaybe<ComponentUiLinkListInput>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']>;
  readonly title: InputMaybe<Scalars['String']>;
};

export type LayoutPreHeaderRelationResponseCollection = {
  readonly __typename?: 'LayoutPreHeaderRelationResponseCollection';
  readonly data: ReadonlyArray<LayoutPreHeaderEntity>;
};

export type LayoutSubfooter = {
  readonly __typename?: 'LayoutSubfooter';
  readonly createdAt: Maybe<Scalars['DateTime']>;
  readonly links: ReadonlyArray<Maybe<ComponentUiLinkList>>;
  readonly locale: Maybe<Scalars['String']>;
  readonly localizations: Maybe<LayoutSubfooterRelationResponseCollection>;
  readonly publishedAt: Maybe<Scalars['DateTime']>;
  readonly title: Maybe<Scalars['String']>;
  readonly updatedAt: Maybe<Scalars['DateTime']>;
};

export type LayoutSubfooterLinksArgs = {
  filters: InputMaybe<ComponentUiLinkListFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type LayoutSubfooterLocalizationsArgs = {
  filters: InputMaybe<LayoutSubfooterFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type LayoutSubfooterEntity = {
  readonly __typename?: 'LayoutSubfooterEntity';
  readonly attributes: Maybe<LayoutSubfooter>;
  readonly id: Maybe<Scalars['ID']>;
};

export type LayoutSubfooterEntityResponse = {
  readonly __typename?: 'LayoutSubfooterEntityResponse';
  readonly data: Maybe<LayoutSubfooterEntity>;
};

export type LayoutSubfooterEntityResponseCollection = {
  readonly __typename?: 'LayoutSubfooterEntityResponseCollection';
  readonly data: ReadonlyArray<LayoutSubfooterEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type LayoutSubfooterFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<LayoutSubfooterFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly links: InputMaybe<ComponentUiLinkListFiltersInput>;
  readonly locale: InputMaybe<StringFilterInput>;
  readonly localizations: InputMaybe<LayoutSubfooterFiltersInput>;
  readonly not: InputMaybe<LayoutSubfooterFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<LayoutSubfooterFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly title: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type LayoutSubfooterInput = {
  readonly links: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiLinkListInput>>>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']>;
  readonly title: InputMaybe<Scalars['String']>;
};

export type LayoutSubfooterRelationResponseCollection = {
  readonly __typename?: 'LayoutSubfooterRelationResponseCollection';
  readonly data: ReadonlyArray<LayoutSubfooterEntity>;
};

export type Mutation = {
  readonly __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  readonly changePassword: Maybe<UsersPermissionsLoginPayload>;
  readonly createCountry: Maybe<CountryEntityResponse>;
  readonly createLanguage: Maybe<LanguageEntityResponse>;
  readonly createLayoutFooter: Maybe<LayoutFooterEntityResponse>;
  readonly createLayoutFooterLocalization: Maybe<LayoutFooterEntityResponse>;
  readonly createLayoutHeader: Maybe<LayoutHeaderEntityResponse>;
  readonly createLayoutHeaderLocalization: Maybe<LayoutHeaderEntityResponse>;
  readonly createLayoutPreHeader: Maybe<LayoutPreHeaderEntityResponse>;
  readonly createLayoutPreHeaderLocalization: Maybe<LayoutPreHeaderEntityResponse>;
  readonly createLayoutSubfooter: Maybe<LayoutSubfooterEntityResponse>;
  readonly createLayoutSubfooterLocalization: Maybe<LayoutSubfooterEntityResponse>;
  readonly createPageHome: Maybe<PageHomeEntityResponse>;
  readonly createPageHomeLocalization: Maybe<PageHomeEntityResponse>;
  readonly createSectionBanner: Maybe<SectionBannerEntityResponse>;
  readonly createSectionBannerLocalization: Maybe<SectionBannerEntityResponse>;
  readonly createSectionDiscount: Maybe<SectionDiscountEntityResponse>;
  readonly createSectionDiscountLocalization: Maybe<SectionDiscountEntityResponse>;
  readonly createSectionMembership: Maybe<SectionMembershipEntityResponse>;
  readonly createSectionMembershipLocalization: Maybe<SectionMembershipEntityResponse>;
  readonly createSectionTrend: Maybe<SectionTrendEntityResponse>;
  readonly createSectionTrendLocalization: Maybe<SectionTrendEntityResponse>;
  readonly createShoe: Maybe<ShoeEntityResponse>;
  readonly createShoeLocalization: Maybe<ShoeEntityResponse>;
  readonly createSize: Maybe<SizeEntityResponse>;
  readonly createSizeLocalization: Maybe<SizeEntityResponse>;
  readonly createType: Maybe<TypeEntityResponse>;
  readonly createTypeLocalization: Maybe<TypeEntityResponse>;
  readonly createUploadFile: Maybe<UploadFileEntityResponse>;
  readonly createUploadFolder: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  readonly createUsersPermissionsRole: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  readonly createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  readonly deleteCountry: Maybe<CountryEntityResponse>;
  readonly deleteLanguage: Maybe<LanguageEntityResponse>;
  readonly deleteLayoutFooter: Maybe<LayoutFooterEntityResponse>;
  readonly deleteLayoutHeader: Maybe<LayoutHeaderEntityResponse>;
  readonly deleteLayoutPreHeader: Maybe<LayoutPreHeaderEntityResponse>;
  readonly deleteLayoutSubfooter: Maybe<LayoutSubfooterEntityResponse>;
  readonly deletePageHome: Maybe<PageHomeEntityResponse>;
  readonly deleteSectionBanner: Maybe<SectionBannerEntityResponse>;
  readonly deleteSectionDiscount: Maybe<SectionDiscountEntityResponse>;
  readonly deleteSectionMembership: Maybe<SectionMembershipEntityResponse>;
  readonly deleteSectionTrend: Maybe<SectionTrendEntityResponse>;
  readonly deleteShoe: Maybe<ShoeEntityResponse>;
  readonly deleteSize: Maybe<SizeEntityResponse>;
  readonly deleteType: Maybe<TypeEntityResponse>;
  readonly deleteUploadFile: Maybe<UploadFileEntityResponse>;
  readonly deleteUploadFolder: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  readonly deleteUsersPermissionsRole: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  readonly deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  readonly emailConfirmation: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  readonly forgotPassword: Maybe<UsersPermissionsPasswordPayload>;
  readonly login: UsersPermissionsLoginPayload;
  readonly multipleUpload: ReadonlyArray<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  readonly register: UsersPermissionsLoginPayload;
  readonly removeFile: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  readonly resetPassword: Maybe<UsersPermissionsLoginPayload>;
  readonly updateCountry: Maybe<CountryEntityResponse>;
  readonly updateFileInfo: UploadFileEntityResponse;
  readonly updateLanguage: Maybe<LanguageEntityResponse>;
  readonly updateLayoutFooter: Maybe<LayoutFooterEntityResponse>;
  readonly updateLayoutHeader: Maybe<LayoutHeaderEntityResponse>;
  readonly updateLayoutPreHeader: Maybe<LayoutPreHeaderEntityResponse>;
  readonly updateLayoutSubfooter: Maybe<LayoutSubfooterEntityResponse>;
  readonly updatePageHome: Maybe<PageHomeEntityResponse>;
  readonly updateSectionBanner: Maybe<SectionBannerEntityResponse>;
  readonly updateSectionDiscount: Maybe<SectionDiscountEntityResponse>;
  readonly updateSectionMembership: Maybe<SectionMembershipEntityResponse>;
  readonly updateSectionTrend: Maybe<SectionTrendEntityResponse>;
  readonly updateShoe: Maybe<ShoeEntityResponse>;
  readonly updateSize: Maybe<SizeEntityResponse>;
  readonly updateType: Maybe<TypeEntityResponse>;
  readonly updateUploadFile: Maybe<UploadFileEntityResponse>;
  readonly updateUploadFolder: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  readonly updateUsersPermissionsRole: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  readonly updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  readonly upload: UploadFileEntityResponse;
};

export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};

export type MutationCreateCountryArgs = {
  data: CountryInput;
};

export type MutationCreateLanguageArgs = {
  data: LanguageInput;
};

export type MutationCreateLayoutFooterArgs = {
  data: LayoutFooterInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateLayoutFooterLocalizationArgs = {
  data: InputMaybe<LayoutFooterInput>;
  id: InputMaybe<Scalars['ID']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateLayoutHeaderArgs = {
  data: LayoutHeaderInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateLayoutHeaderLocalizationArgs = {
  data: InputMaybe<LayoutHeaderInput>;
  id: InputMaybe<Scalars['ID']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateLayoutPreHeaderArgs = {
  data: LayoutPreHeaderInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateLayoutPreHeaderLocalizationArgs = {
  data: InputMaybe<LayoutPreHeaderInput>;
  id: InputMaybe<Scalars['ID']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateLayoutSubfooterArgs = {
  data: LayoutSubfooterInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateLayoutSubfooterLocalizationArgs = {
  data: InputMaybe<LayoutSubfooterInput>;
  id: InputMaybe<Scalars['ID']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreatePageHomeArgs = {
  data: PageHomeInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreatePageHomeLocalizationArgs = {
  data: InputMaybe<PageHomeInput>;
  id: InputMaybe<Scalars['ID']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateSectionBannerArgs = {
  data: SectionBannerInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateSectionBannerLocalizationArgs = {
  data: InputMaybe<SectionBannerInput>;
  id: InputMaybe<Scalars['ID']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateSectionDiscountArgs = {
  data: SectionDiscountInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateSectionDiscountLocalizationArgs = {
  data: InputMaybe<SectionDiscountInput>;
  id: InputMaybe<Scalars['ID']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateSectionMembershipArgs = {
  data: SectionMembershipInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateSectionMembershipLocalizationArgs = {
  data: InputMaybe<SectionMembershipInput>;
  id: InputMaybe<Scalars['ID']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateSectionTrendArgs = {
  data: SectionTrendInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateSectionTrendLocalizationArgs = {
  data: InputMaybe<SectionTrendInput>;
  id: InputMaybe<Scalars['ID']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateShoeArgs = {
  data: ShoeInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateShoeLocalizationArgs = {
  data: InputMaybe<ShoeInput>;
  id: InputMaybe<Scalars['ID']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateSizeArgs = {
  data: SizeInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateSizeLocalizationArgs = {
  data: InputMaybe<SizeInput>;
  id: InputMaybe<Scalars['ID']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateTypeArgs = {
  data: TypeInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateTypeLocalizationArgs = {
  data: InputMaybe<TypeInput>;
  id: InputMaybe<Scalars['ID']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};

export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};

export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};

export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};

export type MutationDeleteCountryArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteLanguageArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteLayoutFooterArgs = {
  id: Scalars['ID'];
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationDeleteLayoutHeaderArgs = {
  id: Scalars['ID'];
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationDeleteLayoutPreHeaderArgs = {
  id: Scalars['ID'];
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationDeleteLayoutSubfooterArgs = {
  id: Scalars['ID'];
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationDeletePageHomeArgs = {
  id: Scalars['ID'];
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationDeleteSectionBannerArgs = {
  id: Scalars['ID'];
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationDeleteSectionDiscountArgs = {
  id: Scalars['ID'];
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationDeleteSectionMembershipArgs = {
  id: Scalars['ID'];
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationDeleteSectionTrendArgs = {
  id: Scalars['ID'];
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationDeleteShoeArgs = {
  id: Scalars['ID'];
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationDeleteSizeArgs = {
  id: Scalars['ID'];
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationDeleteTypeArgs = {
  id: Scalars['ID'];
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};

export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};

export type MutationMultipleUploadArgs = {
  field: InputMaybe<Scalars['String']>;
  files: ReadonlyArray<InputMaybe<Scalars['Upload']>>;
  ref: InputMaybe<Scalars['String']>;
  refId: InputMaybe<Scalars['ID']>;
};

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};

export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};

export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};

export type MutationUpdateCountryArgs = {
  data: CountryInput;
  id: Scalars['ID'];
};

export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: InputMaybe<FileInfoInput>;
};

export type MutationUpdateLanguageArgs = {
  data: LanguageInput;
  id: Scalars['ID'];
};

export type MutationUpdateLayoutFooterArgs = {
  data: LayoutFooterInput;
  id: Scalars['ID'];
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationUpdateLayoutHeaderArgs = {
  data: LayoutHeaderInput;
  id: Scalars['ID'];
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationUpdateLayoutPreHeaderArgs = {
  data: LayoutPreHeaderInput;
  id: Scalars['ID'];
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationUpdateLayoutSubfooterArgs = {
  data: LayoutSubfooterInput;
  id: Scalars['ID'];
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationUpdatePageHomeArgs = {
  data: PageHomeInput;
  id: Scalars['ID'];
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationUpdateSectionBannerArgs = {
  data: SectionBannerInput;
  id: Scalars['ID'];
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationUpdateSectionDiscountArgs = {
  data: SectionDiscountInput;
  id: Scalars['ID'];
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationUpdateSectionMembershipArgs = {
  data: SectionMembershipInput;
  id: Scalars['ID'];
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationUpdateSectionTrendArgs = {
  data: SectionTrendInput;
  id: Scalars['ID'];
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationUpdateShoeArgs = {
  data: ShoeInput;
  id: Scalars['ID'];
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationUpdateSizeArgs = {
  data: SizeInput;
  id: Scalars['ID'];
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationUpdateTypeArgs = {
  data: TypeInput;
  id: Scalars['ID'];
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};

export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID'];
};

export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};

export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};

export type MutationUploadArgs = {
  field: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info: InputMaybe<FileInfoInput>;
  ref: InputMaybe<Scalars['String']>;
  refId: InputMaybe<Scalars['ID']>;
};

export type PageHome = {
  readonly __typename?: 'PageHome';
  readonly createdAt: Maybe<Scalars['DateTime']>;
  readonly layout_footer: Maybe<LayoutFooterEntityResponse>;
  readonly layout_header: Maybe<LayoutHeaderEntityResponse>;
  readonly layout_pre_header: Maybe<LayoutPreHeaderEntityResponse>;
  readonly layout_subfooter: Maybe<LayoutSubfooterEntityResponse>;
  readonly locale: Maybe<Scalars['String']>;
  readonly localizations: Maybe<PageHomeRelationResponseCollection>;
  readonly publishedAt: Maybe<Scalars['DateTime']>;
  readonly section_banner: Maybe<SectionBannerEntityResponse>;
  readonly section_discount: Maybe<SectionDiscountEntityResponse>;
  readonly section_membership: Maybe<SectionMembershipEntityResponse>;
  readonly section_trend: Maybe<SectionTrendEntityResponse>;
  readonly title: Scalars['String'];
  readonly updatedAt: Maybe<Scalars['DateTime']>;
};

export type PageHomeLocalizationsArgs = {
  filters: InputMaybe<PageHomeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type PageHomeEntity = {
  readonly __typename?: 'PageHomeEntity';
  readonly attributes: Maybe<PageHome>;
  readonly id: Maybe<Scalars['ID']>;
};

export type PageHomeEntityResponse = {
  readonly __typename?: 'PageHomeEntityResponse';
  readonly data: Maybe<PageHomeEntity>;
};

export type PageHomeEntityResponseCollection = {
  readonly __typename?: 'PageHomeEntityResponseCollection';
  readonly data: ReadonlyArray<PageHomeEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type PageHomeFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<PageHomeFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly layout_footer: InputMaybe<LayoutFooterFiltersInput>;
  readonly layout_header: InputMaybe<LayoutHeaderFiltersInput>;
  readonly layout_pre_header: InputMaybe<LayoutPreHeaderFiltersInput>;
  readonly layout_subfooter: InputMaybe<LayoutSubfooterFiltersInput>;
  readonly locale: InputMaybe<StringFilterInput>;
  readonly localizations: InputMaybe<PageHomeFiltersInput>;
  readonly not: InputMaybe<PageHomeFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<PageHomeFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly section_banner: InputMaybe<SectionBannerFiltersInput>;
  readonly section_discount: InputMaybe<SectionDiscountFiltersInput>;
  readonly section_membership: InputMaybe<SectionMembershipFiltersInput>;
  readonly section_trend: InputMaybe<SectionTrendFiltersInput>;
  readonly title: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type PageHomeInput = {
  readonly layout_footer: InputMaybe<Scalars['ID']>;
  readonly layout_header: InputMaybe<Scalars['ID']>;
  readonly layout_pre_header: InputMaybe<Scalars['ID']>;
  readonly layout_subfooter: InputMaybe<Scalars['ID']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']>;
  readonly section_banner: InputMaybe<Scalars['ID']>;
  readonly section_discount: InputMaybe<Scalars['ID']>;
  readonly section_membership: InputMaybe<Scalars['ID']>;
  readonly section_trend: InputMaybe<Scalars['ID']>;
  readonly title: InputMaybe<Scalars['String']>;
};

export type PageHomeRelationResponseCollection = {
  readonly __typename?: 'PageHomeRelationResponseCollection';
  readonly data: ReadonlyArray<PageHomeEntity>;
};

export type Pagination = {
  readonly __typename?: 'Pagination';
  readonly page: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly pageSize: Scalars['Int'];
  readonly total: Scalars['Int'];
};

export type PaginationArg = {
  readonly limit: InputMaybe<Scalars['Int']>;
  readonly page: InputMaybe<Scalars['Int']>;
  readonly pageSize: InputMaybe<Scalars['Int']>;
  readonly start: InputMaybe<Scalars['Int']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  readonly __typename?: 'Query';
  readonly countries: Maybe<CountryEntityResponseCollection>;
  readonly country: Maybe<CountryEntityResponse>;
  readonly i18NLocale: Maybe<I18NLocaleEntityResponse>;
  readonly i18NLocales: Maybe<I18NLocaleEntityResponseCollection>;
  readonly language: Maybe<LanguageEntityResponse>;
  readonly languages: Maybe<LanguageEntityResponseCollection>;
  readonly layoutFooter: Maybe<LayoutFooterEntityResponse>;
  readonly layoutFooters: Maybe<LayoutFooterEntityResponseCollection>;
  readonly layoutHeader: Maybe<LayoutHeaderEntityResponse>;
  readonly layoutHeaders: Maybe<LayoutHeaderEntityResponseCollection>;
  readonly layoutPreHeader: Maybe<LayoutPreHeaderEntityResponse>;
  readonly layoutPreHeaders: Maybe<LayoutPreHeaderEntityResponseCollection>;
  readonly layoutSubfooter: Maybe<LayoutSubfooterEntityResponse>;
  readonly layoutSubfooters: Maybe<LayoutSubfooterEntityResponseCollection>;
  readonly me: Maybe<UsersPermissionsMe>;
  readonly pageHome: Maybe<PageHomeEntityResponse>;
  readonly pageHomes: Maybe<PageHomeEntityResponseCollection>;
  readonly sectionBanner: Maybe<SectionBannerEntityResponse>;
  readonly sectionBanners: Maybe<SectionBannerEntityResponseCollection>;
  readonly sectionDiscount: Maybe<SectionDiscountEntityResponse>;
  readonly sectionDiscounts: Maybe<SectionDiscountEntityResponseCollection>;
  readonly sectionMembership: Maybe<SectionMembershipEntityResponse>;
  readonly sectionMemberships: Maybe<SectionMembershipEntityResponseCollection>;
  readonly sectionTrend: Maybe<SectionTrendEntityResponse>;
  readonly sectionTrends: Maybe<SectionTrendEntityResponseCollection>;
  readonly shoe: Maybe<ShoeEntityResponse>;
  readonly shoes: Maybe<ShoeEntityResponseCollection>;
  readonly size: Maybe<SizeEntityResponse>;
  readonly sizes: Maybe<SizeEntityResponseCollection>;
  readonly type: Maybe<TypeEntityResponse>;
  readonly types: Maybe<TypeEntityResponseCollection>;
  readonly uploadFile: Maybe<UploadFileEntityResponse>;
  readonly uploadFiles: Maybe<UploadFileEntityResponseCollection>;
  readonly uploadFolder: Maybe<UploadFolderEntityResponse>;
  readonly uploadFolders: Maybe<UploadFolderEntityResponseCollection>;
  readonly usersPermissionsRole: Maybe<UsersPermissionsRoleEntityResponse>;
  readonly usersPermissionsRoles: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  readonly usersPermissionsUser: Maybe<UsersPermissionsUserEntityResponse>;
  readonly usersPermissionsUsers: Maybe<UsersPermissionsUserEntityResponseCollection>;
};

export type QueryCountriesArgs = {
  filters: InputMaybe<CountryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type QueryCountryArgs = {
  id: InputMaybe<Scalars['ID']>;
};

export type QueryI18NLocaleArgs = {
  id: InputMaybe<Scalars['ID']>;
};

export type QueryI18NLocalesArgs = {
  filters: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type QueryLanguageArgs = {
  id: InputMaybe<Scalars['ID']>;
};

export type QueryLanguagesArgs = {
  filters: InputMaybe<LanguageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type QueryLayoutFooterArgs = {
  id: InputMaybe<Scalars['ID']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type QueryLayoutFootersArgs = {
  filters: InputMaybe<LayoutFooterFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type QueryLayoutHeaderArgs = {
  id: InputMaybe<Scalars['ID']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type QueryLayoutHeadersArgs = {
  filters: InputMaybe<LayoutHeaderFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type QueryLayoutPreHeaderArgs = {
  id: InputMaybe<Scalars['ID']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type QueryLayoutPreHeadersArgs = {
  filters: InputMaybe<LayoutPreHeaderFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type QueryLayoutSubfooterArgs = {
  id: InputMaybe<Scalars['ID']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type QueryLayoutSubfootersArgs = {
  filters: InputMaybe<LayoutSubfooterFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type QueryPageHomeArgs = {
  id: InputMaybe<Scalars['ID']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type QueryPageHomesArgs = {
  filters: InputMaybe<PageHomeFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type QuerySectionBannerArgs = {
  id: InputMaybe<Scalars['ID']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type QuerySectionBannersArgs = {
  filters: InputMaybe<SectionBannerFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type QuerySectionDiscountArgs = {
  id: InputMaybe<Scalars['ID']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type QuerySectionDiscountsArgs = {
  filters: InputMaybe<SectionDiscountFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type QuerySectionMembershipArgs = {
  id: InputMaybe<Scalars['ID']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type QuerySectionMembershipsArgs = {
  filters: InputMaybe<SectionMembershipFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type QuerySectionTrendArgs = {
  id: InputMaybe<Scalars['ID']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type QuerySectionTrendsArgs = {
  filters: InputMaybe<SectionTrendFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type QueryShoeArgs = {
  id: InputMaybe<Scalars['ID']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type QueryShoesArgs = {
  filters: InputMaybe<ShoeFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type QuerySizeArgs = {
  id: InputMaybe<Scalars['ID']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type QuerySizesArgs = {
  filters: InputMaybe<SizeFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type QueryTypeArgs = {
  id: InputMaybe<Scalars['ID']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type QueryTypesArgs = {
  filters: InputMaybe<TypeFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type QueryUploadFileArgs = {
  id: InputMaybe<Scalars['ID']>;
};

export type QueryUploadFilesArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type QueryUploadFolderArgs = {
  id: InputMaybe<Scalars['ID']>;
};

export type QueryUploadFoldersArgs = {
  filters: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type QueryUsersPermissionsRoleArgs = {
  id: InputMaybe<Scalars['ID']>;
};

export type QueryUsersPermissionsRolesArgs = {
  filters: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type QueryUsersPermissionsUserArgs = {
  id: InputMaybe<Scalars['ID']>;
};

export type QueryUsersPermissionsUsersArgs = {
  filters: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  readonly __typename?: 'ResponseCollectionMeta';
  readonly pagination: Pagination;
};

export type SectionBanner = {
  readonly __typename?: 'SectionBanner';
  readonly createdAt: Maybe<Scalars['DateTime']>;
  readonly linkButton: ReadonlyArray<Maybe<ComponentUiButton>>;
  readonly locale: Maybe<Scalars['String']>;
  readonly localizations: Maybe<SectionBannerRelationResponseCollection>;
  readonly preSectionTitle: Maybe<Scalars['String']>;
  readonly publishedAt: Maybe<Scalars['DateTime']>;
  readonly sectionTitle: Scalars['String'];
  readonly subSectionTitle: Scalars['String'];
  readonly title: Scalars['String'];
  readonly updatedAt: Maybe<Scalars['DateTime']>;
  readonly video: Maybe<UploadFileEntityResponse>;
};

export type SectionBannerLinkButtonArgs = {
  filters: InputMaybe<ComponentUiButtonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type SectionBannerLocalizationsArgs = {
  filters: InputMaybe<SectionBannerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type SectionBannerEntity = {
  readonly __typename?: 'SectionBannerEntity';
  readonly attributes: Maybe<SectionBanner>;
  readonly id: Maybe<Scalars['ID']>;
};

export type SectionBannerEntityResponse = {
  readonly __typename?: 'SectionBannerEntityResponse';
  readonly data: Maybe<SectionBannerEntity>;
};

export type SectionBannerEntityResponseCollection = {
  readonly __typename?: 'SectionBannerEntityResponseCollection';
  readonly data: ReadonlyArray<SectionBannerEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type SectionBannerFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<SectionBannerFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly linkButton: InputMaybe<ComponentUiButtonFiltersInput>;
  readonly locale: InputMaybe<StringFilterInput>;
  readonly localizations: InputMaybe<SectionBannerFiltersInput>;
  readonly not: InputMaybe<SectionBannerFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<SectionBannerFiltersInput>>>;
  readonly preSectionTitle: InputMaybe<StringFilterInput>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly sectionTitle: InputMaybe<StringFilterInput>;
  readonly subSectionTitle: InputMaybe<StringFilterInput>;
  readonly title: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type SectionBannerInput = {
  readonly linkButton: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiButtonInput>>>;
  readonly preSectionTitle: InputMaybe<Scalars['String']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']>;
  readonly sectionTitle: InputMaybe<Scalars['String']>;
  readonly subSectionTitle: InputMaybe<Scalars['String']>;
  readonly title: InputMaybe<Scalars['String']>;
  readonly video: InputMaybe<Scalars['ID']>;
};

export type SectionBannerRelationResponseCollection = {
  readonly __typename?: 'SectionBannerRelationResponseCollection';
  readonly data: ReadonlyArray<SectionBannerEntity>;
};

export type SectionDiscount = {
  readonly __typename?: 'SectionDiscount';
  readonly createdAt: Maybe<Scalars['DateTime']>;
  readonly items: ReadonlyArray<Maybe<ComponentUiDiscountCard>>;
  readonly locale: Maybe<Scalars['String']>;
  readonly localizations: Maybe<SectionDiscountRelationResponseCollection>;
  readonly publishedAt: Maybe<Scalars['DateTime']>;
  readonly title: Scalars['String'];
  readonly updatedAt: Maybe<Scalars['DateTime']>;
};

export type SectionDiscountItemsArgs = {
  filters: InputMaybe<ComponentUiDiscountCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type SectionDiscountLocalizationsArgs = {
  filters: InputMaybe<SectionDiscountFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type SectionDiscountEntity = {
  readonly __typename?: 'SectionDiscountEntity';
  readonly attributes: Maybe<SectionDiscount>;
  readonly id: Maybe<Scalars['ID']>;
};

export type SectionDiscountEntityResponse = {
  readonly __typename?: 'SectionDiscountEntityResponse';
  readonly data: Maybe<SectionDiscountEntity>;
};

export type SectionDiscountEntityResponseCollection = {
  readonly __typename?: 'SectionDiscountEntityResponseCollection';
  readonly data: ReadonlyArray<SectionDiscountEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type SectionDiscountFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<SectionDiscountFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly items: InputMaybe<ComponentUiDiscountCardFiltersInput>;
  readonly locale: InputMaybe<StringFilterInput>;
  readonly localizations: InputMaybe<SectionDiscountFiltersInput>;
  readonly not: InputMaybe<SectionDiscountFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<SectionDiscountFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly title: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type SectionDiscountInput = {
  readonly items: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiDiscountCardInput>>>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']>;
  readonly title: InputMaybe<Scalars['String']>;
};

export type SectionDiscountRelationResponseCollection = {
  readonly __typename?: 'SectionDiscountRelationResponseCollection';
  readonly data: ReadonlyArray<SectionDiscountEntity>;
};

export type SectionMembership = {
  readonly __typename?: 'SectionMembership';
  readonly card: ReadonlyArray<Maybe<ComponentUiFigure>>;
  readonly createdAt: Maybe<Scalars['DateTime']>;
  readonly locale: Maybe<Scalars['String']>;
  readonly localizations: Maybe<SectionMembershipRelationResponseCollection>;
  readonly publishedAt: Maybe<Scalars['DateTime']>;
  readonly title: Scalars['String'];
  readonly updatedAt: Maybe<Scalars['DateTime']>;
};

export type SectionMembershipCardArgs = {
  filters: InputMaybe<ComponentUiFigureFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type SectionMembershipLocalizationsArgs = {
  filters: InputMaybe<SectionMembershipFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type SectionMembershipEntity = {
  readonly __typename?: 'SectionMembershipEntity';
  readonly attributes: Maybe<SectionMembership>;
  readonly id: Maybe<Scalars['ID']>;
};

export type SectionMembershipEntityResponse = {
  readonly __typename?: 'SectionMembershipEntityResponse';
  readonly data: Maybe<SectionMembershipEntity>;
};

export type SectionMembershipEntityResponseCollection = {
  readonly __typename?: 'SectionMembershipEntityResponseCollection';
  readonly data: ReadonlyArray<SectionMembershipEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type SectionMembershipFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<SectionMembershipFiltersInput>>>;
  readonly card: InputMaybe<ComponentUiFigureFiltersInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly locale: InputMaybe<StringFilterInput>;
  readonly localizations: InputMaybe<SectionMembershipFiltersInput>;
  readonly not: InputMaybe<SectionMembershipFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<SectionMembershipFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly title: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type SectionMembershipInput = {
  readonly card: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiFigureInput>>>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']>;
  readonly title: InputMaybe<Scalars['String']>;
};

export type SectionMembershipRelationResponseCollection = {
  readonly __typename?: 'SectionMembershipRelationResponseCollection';
  readonly data: ReadonlyArray<SectionMembershipEntity>;
};

export type SectionTrend = {
  readonly __typename?: 'SectionTrend';
  readonly createdAt: Maybe<Scalars['DateTime']>;
  readonly locale: Maybe<Scalars['String']>;
  readonly localizations: Maybe<SectionTrendRelationResponseCollection>;
  readonly publishedAt: Maybe<Scalars['DateTime']>;
  readonly sectionTitle: Scalars['String'];
  readonly shoe: Maybe<ShoeEntityResponse>;
  readonly title: Scalars['String'];
  readonly updatedAt: Maybe<Scalars['DateTime']>;
};

export type SectionTrendLocalizationsArgs = {
  filters: InputMaybe<SectionTrendFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type SectionTrendEntity = {
  readonly __typename?: 'SectionTrendEntity';
  readonly attributes: Maybe<SectionTrend>;
  readonly id: Maybe<Scalars['ID']>;
};

export type SectionTrendEntityResponse = {
  readonly __typename?: 'SectionTrendEntityResponse';
  readonly data: Maybe<SectionTrendEntity>;
};

export type SectionTrendEntityResponseCollection = {
  readonly __typename?: 'SectionTrendEntityResponseCollection';
  readonly data: ReadonlyArray<SectionTrendEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type SectionTrendFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<SectionTrendFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly locale: InputMaybe<StringFilterInput>;
  readonly localizations: InputMaybe<SectionTrendFiltersInput>;
  readonly not: InputMaybe<SectionTrendFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<SectionTrendFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly sectionTitle: InputMaybe<StringFilterInput>;
  readonly shoe: InputMaybe<ShoeFiltersInput>;
  readonly title: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type SectionTrendInput = {
  readonly publishedAt: InputMaybe<Scalars['DateTime']>;
  readonly sectionTitle: InputMaybe<Scalars['String']>;
  readonly shoe: InputMaybe<Scalars['ID']>;
  readonly title: InputMaybe<Scalars['String']>;
};

export type SectionTrendRelationResponseCollection = {
  readonly __typename?: 'SectionTrendRelationResponseCollection';
  readonly data: ReadonlyArray<SectionTrendEntity>;
};

export type Shoe = {
  readonly __typename?: 'Shoe';
  readonly color: Scalars['String'];
  readonly content: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['DateTime']>;
  readonly description: Scalars['String'];
  readonly locale: Maybe<Scalars['String']>;
  readonly localizations: Maybe<ShoeRelationResponseCollection>;
  readonly medias: UploadFileRelationResponseCollection;
  readonly name: Scalars['String'];
  readonly publishedAt: Maybe<Scalars['DateTime']>;
  readonly type: Maybe<TypeEntityResponse>;
  readonly updatedAt: Maybe<Scalars['DateTime']>;
};

export type ShoeLocalizationsArgs = {
  filters: InputMaybe<ShoeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type ShoeMediasArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type ShoeEntity = {
  readonly __typename?: 'ShoeEntity';
  readonly attributes: Maybe<Shoe>;
  readonly id: Maybe<Scalars['ID']>;
};

export type ShoeEntityResponse = {
  readonly __typename?: 'ShoeEntityResponse';
  readonly data: Maybe<ShoeEntity>;
};

export type ShoeEntityResponseCollection = {
  readonly __typename?: 'ShoeEntityResponseCollection';
  readonly data: ReadonlyArray<ShoeEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type ShoeFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ShoeFiltersInput>>>;
  readonly color: InputMaybe<StringFilterInput>;
  readonly content: InputMaybe<StringFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly description: InputMaybe<StringFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly locale: InputMaybe<StringFilterInput>;
  readonly localizations: InputMaybe<ShoeFiltersInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ShoeFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ShoeFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly type: InputMaybe<TypeFiltersInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type ShoeInput = {
  readonly color: InputMaybe<Scalars['String']>;
  readonly content: InputMaybe<Scalars['String']>;
  readonly description: InputMaybe<Scalars['String']>;
  readonly medias: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  readonly name: InputMaybe<Scalars['String']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']>;
  readonly type: InputMaybe<Scalars['ID']>;
};

export type ShoeRelationResponseCollection = {
  readonly __typename?: 'ShoeRelationResponseCollection';
  readonly data: ReadonlyArray<ShoeEntity>;
};

export type Size = {
  readonly __typename?: 'Size';
  readonly createdAt: Maybe<Scalars['DateTime']>;
  readonly locale: Maybe<Scalars['String']>;
  readonly localizations: Maybe<SizeRelationResponseCollection>;
  readonly name: Scalars['String'];
  readonly publishedAt: Maybe<Scalars['DateTime']>;
  readonly updatedAt: Maybe<Scalars['DateTime']>;
  readonly values: Scalars['String'];
};

export type SizeLocalizationsArgs = {
  filters: InputMaybe<SizeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type SizeEntity = {
  readonly __typename?: 'SizeEntity';
  readonly attributes: Maybe<Size>;
  readonly id: Maybe<Scalars['ID']>;
};

export type SizeEntityResponse = {
  readonly __typename?: 'SizeEntityResponse';
  readonly data: Maybe<SizeEntity>;
};

export type SizeEntityResponseCollection = {
  readonly __typename?: 'SizeEntityResponseCollection';
  readonly data: ReadonlyArray<SizeEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type SizeFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<SizeFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly locale: InputMaybe<StringFilterInput>;
  readonly localizations: InputMaybe<SizeFiltersInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<SizeFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<SizeFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly values: InputMaybe<StringFilterInput>;
};

export type SizeInput = {
  readonly name: InputMaybe<Scalars['String']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']>;
  readonly values: InputMaybe<Scalars['String']>;
};

export type SizeRelationResponseCollection = {
  readonly __typename?: 'SizeRelationResponseCollection';
  readonly data: ReadonlyArray<SizeEntity>;
};

export type StringFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly contains: InputMaybe<Scalars['String']>;
  readonly containsi: InputMaybe<Scalars['String']>;
  readonly endsWith: InputMaybe<Scalars['String']>;
  readonly eq: InputMaybe<Scalars['String']>;
  readonly eqi: InputMaybe<Scalars['String']>;
  readonly gt: InputMaybe<Scalars['String']>;
  readonly gte: InputMaybe<Scalars['String']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly lt: InputMaybe<Scalars['String']>;
  readonly lte: InputMaybe<Scalars['String']>;
  readonly ne: InputMaybe<Scalars['String']>;
  readonly not: InputMaybe<StringFilterInput>;
  readonly notContains: InputMaybe<Scalars['String']>;
  readonly notContainsi: InputMaybe<Scalars['String']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']>;
  readonly null: InputMaybe<Scalars['Boolean']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly startsWith: InputMaybe<Scalars['String']>;
};

export type Type = {
  readonly __typename?: 'Type';
  readonly createdAt: Maybe<Scalars['DateTime']>;
  readonly locale: Maybe<Scalars['String']>;
  readonly localizations: Maybe<TypeRelationResponseCollection>;
  readonly name: Maybe<Enum_Type_Name>;
  readonly publishedAt: Maybe<Scalars['DateTime']>;
  readonly updatedAt: Maybe<Scalars['DateTime']>;
};

export type TypeLocalizationsArgs = {
  filters: InputMaybe<TypeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type TypeEntity = {
  readonly __typename?: 'TypeEntity';
  readonly attributes: Maybe<Type>;
  readonly id: Maybe<Scalars['ID']>;
};

export type TypeEntityResponse = {
  readonly __typename?: 'TypeEntityResponse';
  readonly data: Maybe<TypeEntity>;
};

export type TypeEntityResponseCollection = {
  readonly __typename?: 'TypeEntityResponseCollection';
  readonly data: ReadonlyArray<TypeEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type TypeFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<TypeFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly locale: InputMaybe<StringFilterInput>;
  readonly localizations: InputMaybe<TypeFiltersInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<TypeFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<TypeFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type TypeInput = {
  readonly name: InputMaybe<Enum_Type_Name>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']>;
};

export type TypeRelationResponseCollection = {
  readonly __typename?: 'TypeRelationResponseCollection';
  readonly data: ReadonlyArray<TypeEntity>;
};

export type UploadFile = {
  readonly __typename?: 'UploadFile';
  readonly alternativeText: Maybe<Scalars['String']>;
  readonly caption: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['DateTime']>;
  readonly ext: Maybe<Scalars['String']>;
  readonly formats: Maybe<Scalars['JSON']>;
  readonly hash: Scalars['String'];
  readonly height: Maybe<Scalars['Int']>;
  readonly mime: Scalars['String'];
  readonly name: Scalars['String'];
  readonly previewUrl: Maybe<Scalars['String']>;
  readonly provider: Scalars['String'];
  readonly provider_metadata: Maybe<Scalars['JSON']>;
  readonly related: Maybe<ReadonlyArray<Maybe<GenericMorph>>>;
  readonly size: Scalars['Float'];
  readonly updatedAt: Maybe<Scalars['DateTime']>;
  readonly url: Scalars['String'];
  readonly width: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  readonly __typename?: 'UploadFileEntity';
  readonly attributes: Maybe<UploadFile>;
  readonly id: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  readonly __typename?: 'UploadFileEntityResponse';
  readonly data: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  readonly __typename?: 'UploadFileEntityResponseCollection';
  readonly data: ReadonlyArray<UploadFileEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  readonly alternativeText: InputMaybe<StringFilterInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UploadFileFiltersInput>>>;
  readonly caption: InputMaybe<StringFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly ext: InputMaybe<StringFilterInput>;
  readonly folder: InputMaybe<UploadFolderFiltersInput>;
  readonly folderPath: InputMaybe<StringFilterInput>;
  readonly formats: InputMaybe<JsonFilterInput>;
  readonly hash: InputMaybe<StringFilterInput>;
  readonly height: InputMaybe<IntFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly mime: InputMaybe<StringFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<UploadFileFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UploadFileFiltersInput>>>;
  readonly previewUrl: InputMaybe<StringFilterInput>;
  readonly provider: InputMaybe<StringFilterInput>;
  readonly provider_metadata: InputMaybe<JsonFilterInput>;
  readonly size: InputMaybe<FloatFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly url: InputMaybe<StringFilterInput>;
  readonly width: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  readonly alternativeText: InputMaybe<Scalars['String']>;
  readonly caption: InputMaybe<Scalars['String']>;
  readonly ext: InputMaybe<Scalars['String']>;
  readonly folder: InputMaybe<Scalars['ID']>;
  readonly folderPath: InputMaybe<Scalars['String']>;
  readonly formats: InputMaybe<Scalars['JSON']>;
  readonly hash: InputMaybe<Scalars['String']>;
  readonly height: InputMaybe<Scalars['Int']>;
  readonly mime: InputMaybe<Scalars['String']>;
  readonly name: InputMaybe<Scalars['String']>;
  readonly previewUrl: InputMaybe<Scalars['String']>;
  readonly provider: InputMaybe<Scalars['String']>;
  readonly provider_metadata: InputMaybe<Scalars['JSON']>;
  readonly size: InputMaybe<Scalars['Float']>;
  readonly url: InputMaybe<Scalars['String']>;
  readonly width: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  readonly __typename?: 'UploadFileRelationResponseCollection';
  readonly data: ReadonlyArray<UploadFileEntity>;
};

export type UploadFolder = {
  readonly __typename?: 'UploadFolder';
  readonly children: Maybe<UploadFolderRelationResponseCollection>;
  readonly createdAt: Maybe<Scalars['DateTime']>;
  readonly files: Maybe<UploadFileRelationResponseCollection>;
  readonly name: Scalars['String'];
  readonly parent: Maybe<UploadFolderEntityResponse>;
  readonly path: Scalars['String'];
  readonly pathId: Scalars['Int'];
  readonly updatedAt: Maybe<Scalars['DateTime']>;
};

export type UploadFolderChildrenArgs = {
  filters: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderFilesArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderEntity = {
  readonly __typename?: 'UploadFolderEntity';
  readonly attributes: Maybe<UploadFolder>;
  readonly id: Maybe<Scalars['ID']>;
};

export type UploadFolderEntityResponse = {
  readonly __typename?: 'UploadFolderEntityResponse';
  readonly data: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  readonly __typename?: 'UploadFolderEntityResponseCollection';
  readonly data: ReadonlyArray<UploadFolderEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UploadFolderFiltersInput>>>;
  readonly children: InputMaybe<UploadFolderFiltersInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly files: InputMaybe<UploadFileFiltersInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<UploadFolderFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UploadFolderFiltersInput>>>;
  readonly parent: InputMaybe<UploadFolderFiltersInput>;
  readonly path: InputMaybe<StringFilterInput>;
  readonly pathId: InputMaybe<IntFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  readonly children: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  readonly files: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  readonly name: InputMaybe<Scalars['String']>;
  readonly parent: InputMaybe<Scalars['ID']>;
  readonly path: InputMaybe<Scalars['String']>;
  readonly pathId: InputMaybe<Scalars['Int']>;
};

export type UploadFolderRelationResponseCollection = {
  readonly __typename?: 'UploadFolderRelationResponseCollection';
  readonly data: ReadonlyArray<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  readonly __typename?: 'UsersPermissionsCreateRolePayload';
  readonly ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  readonly __typename?: 'UsersPermissionsDeleteRolePayload';
  readonly ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  readonly identifier: Scalars['String'];
  readonly password: Scalars['String'];
  readonly provider: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  readonly __typename?: 'UsersPermissionsLoginPayload';
  readonly jwt: Maybe<Scalars['String']>;
  readonly user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  readonly __typename?: 'UsersPermissionsMe';
  readonly blocked: Maybe<Scalars['Boolean']>;
  readonly confirmed: Maybe<Scalars['Boolean']>;
  readonly email: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly role: Maybe<UsersPermissionsMeRole>;
  readonly username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  readonly __typename?: 'UsersPermissionsMeRole';
  readonly description: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly type: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  readonly __typename?: 'UsersPermissionsPasswordPayload';
  readonly ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  readonly __typename?: 'UsersPermissionsPermission';
  readonly action: Scalars['String'];
  readonly createdAt: Maybe<Scalars['DateTime']>;
  readonly role: Maybe<UsersPermissionsRoleEntityResponse>;
  readonly updatedAt: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  readonly __typename?: 'UsersPermissionsPermissionEntity';
  readonly attributes: Maybe<UsersPermissionsPermission>;
  readonly id: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  readonly action: InputMaybe<StringFilterInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly not: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  readonly role: InputMaybe<UsersPermissionsRoleFiltersInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  readonly __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  readonly data: ReadonlyArray<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  readonly email: Scalars['String'];
  readonly password: Scalars['String'];
  readonly username: Scalars['String'];
};

export type UsersPermissionsRole = {
  readonly __typename?: 'UsersPermissionsRole';
  readonly createdAt: Maybe<Scalars['DateTime']>;
  readonly description: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly permissions: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  readonly type: Maybe<Scalars['String']>;
  readonly updatedAt: Maybe<Scalars['DateTime']>;
  readonly users: Maybe<UsersPermissionsUserRelationResponseCollection>;
};

export type UsersPermissionsRolePermissionsArgs = {
  filters: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleUsersArgs = {
  filters: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  readonly __typename?: 'UsersPermissionsRoleEntity';
  readonly attributes: Maybe<UsersPermissionsRole>;
  readonly id: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  readonly __typename?: 'UsersPermissionsRoleEntityResponse';
  readonly data: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  readonly __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  readonly data: ReadonlyArray<UsersPermissionsRoleEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly description: InputMaybe<StringFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<UsersPermissionsRoleFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  readonly permissions: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  readonly type: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly users: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  readonly description: InputMaybe<Scalars['String']>;
  readonly name: InputMaybe<Scalars['String']>;
  readonly permissions: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  readonly type: InputMaybe<Scalars['String']>;
  readonly users: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  readonly __typename?: 'UsersPermissionsUpdateRolePayload';
  readonly ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  readonly __typename?: 'UsersPermissionsUser';
  readonly blocked: Maybe<Scalars['Boolean']>;
  readonly confirmed: Maybe<Scalars['Boolean']>;
  readonly createdAt: Maybe<Scalars['DateTime']>;
  readonly email: Scalars['String'];
  readonly provider: Maybe<Scalars['String']>;
  readonly role: Maybe<UsersPermissionsRoleEntityResponse>;
  readonly updatedAt: Maybe<Scalars['DateTime']>;
  readonly username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  readonly __typename?: 'UsersPermissionsUserEntity';
  readonly attributes: Maybe<UsersPermissionsUser>;
  readonly id: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  readonly __typename?: 'UsersPermissionsUserEntityResponse';
  readonly data: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  readonly __typename?: 'UsersPermissionsUserEntityResponseCollection';
  readonly data: ReadonlyArray<UsersPermissionsUserEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  readonly blocked: InputMaybe<BooleanFilterInput>;
  readonly confirmationToken: InputMaybe<StringFilterInput>;
  readonly confirmed: InputMaybe<BooleanFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly email: InputMaybe<StringFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly not: InputMaybe<UsersPermissionsUserFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  readonly password: InputMaybe<StringFilterInput>;
  readonly provider: InputMaybe<StringFilterInput>;
  readonly resetPasswordToken: InputMaybe<StringFilterInput>;
  readonly role: InputMaybe<UsersPermissionsRoleFiltersInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly username: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  readonly blocked: InputMaybe<Scalars['Boolean']>;
  readonly confirmationToken: InputMaybe<Scalars['String']>;
  readonly confirmed: InputMaybe<Scalars['Boolean']>;
  readonly email: InputMaybe<Scalars['String']>;
  readonly password: InputMaybe<Scalars['String']>;
  readonly provider: InputMaybe<Scalars['String']>;
  readonly resetPasswordToken: InputMaybe<Scalars['String']>;
  readonly role: InputMaybe<Scalars['ID']>;
  readonly username: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  readonly __typename?: 'UsersPermissionsUserRelationResponseCollection';
  readonly data: ReadonlyArray<UsersPermissionsUserEntity>;
};

export type ButtonFragmentFragment = {
  readonly __typename?: 'ComponentUiButton';
  readonly id: string;
  readonly label: string;
  readonly href: string;
};

export type DiscountCardFragment = {
  readonly __typename?: 'ComponentUiDiscountCard';
  readonly id: string;
  readonly title: string;
  readonly description: string;
};

export type FigureFragmentFragment = {
  readonly __typename?: 'ComponentUiFigure';
  readonly id: string;
  readonly caption: string;
  readonly linkButton: ReadonlyArray<{
    readonly __typename?: 'ComponentUiButton';
    readonly id: string;
    readonly label: string;
    readonly href: string;
  }>;
  readonly image: {
    readonly __typename?: 'UploadFileEntityResponse';
    readonly data: {
      readonly __typename?: 'UploadFileEntity';
      readonly attributes: {
        readonly __typename?: 'UploadFile';
        readonly name: string;
        readonly alternativeText: string;
        readonly caption: string;
        readonly width: number;
        readonly height: number;
        readonly formats: any;
        readonly hash: string;
        readonly ext: string;
        readonly mime: string;
        readonly size: number;
        readonly url: string;
        readonly previewUrl: string;
        readonly provider: string;
        readonly provider_metadata: any;
      };
    };
  };
};

export type IconButtonFragmentFragment = {
  readonly __typename?: 'ComponentUiIconButton';
  readonly id: string;
  readonly label: string;
  readonly href: string;
  readonly icon: Enum_Componentuiiconbutton_Icon;
};

export type LinkFragmentFragment = {
  readonly __typename?: 'ComponentUiLink';
  readonly id: string;
  readonly label: string;
  readonly href: string;
};

export type LinkListFragmentFragment = {
  readonly __typename?: 'ComponentUiLinkList';
  readonly id: string;
  readonly title: string;
  readonly link: ReadonlyArray<{
    readonly __typename?: 'ComponentUiLink';
    readonly id: string;
    readonly label: string;
    readonly href: string;
  }>;
};

export type CountryFragmentFragment = {
  readonly __typename?: 'Country';
  readonly code3: string;
  readonly code2: string;
  readonly createdAt: any;
  readonly updatedAt: any;
  readonly publishedAt: any;
  readonly language: {
    readonly __typename?: 'LanguageEntityResponse';
    readonly data: {
      readonly __typename?: 'LanguageEntity';
      readonly id: string;
      readonly attributes: {
        readonly __typename?: 'Language';
        readonly name: string;
        readonly code: string;
      };
    };
  };
  readonly page_home: {
    readonly __typename?: 'PageHomeEntityResponse';
    readonly data: { readonly __typename?: 'PageHomeEntity'; readonly id: string };
  };
};

export type FileFragmentFragment = {
  readonly __typename?: 'UploadFile';
  readonly name: string;
  readonly alternativeText: string;
  readonly caption: string;
  readonly width: number;
  readonly height: number;
  readonly formats: any;
  readonly hash: string;
  readonly ext: string;
  readonly mime: string;
  readonly size: number;
  readonly url: string;
  readonly previewUrl: string;
  readonly provider: string;
  readonly provider_metadata: any;
};

export type LanguageEntityFragmentFragment = {
  readonly __typename?: 'LanguageEntity';
  readonly id: string;
  readonly attributes: {
    readonly __typename?: 'Language';
    readonly name: string;
    readonly code: string;
  };
};

export type LayoutFooterFragmentFragment = {
  readonly __typename?: 'LayoutFooter';
  readonly title: string;
  readonly socilas: any;
  readonly mainLinks: {
    readonly __typename?: 'ComponentUiLinkList';
    readonly id: string;
    readonly title: string;
    readonly link: ReadonlyArray<{
      readonly __typename?: 'ComponentUiLink';
      readonly id: string;
      readonly label: string;
      readonly href: string;
    }>;
  };
  readonly links: ReadonlyArray<{
    readonly __typename?: 'ComponentUiLinkList';
    readonly id: string;
    readonly title: string;
    readonly link: ReadonlyArray<{
      readonly __typename?: 'ComponentUiLink';
      readonly id: string;
      readonly label: string;
      readonly href: string;
    }>;
  }>;
  readonly supportLinks: {
    readonly __typename?: 'ComponentUiLinkList';
    readonly id: string;
    readonly title: string;
    readonly link: ReadonlyArray<{
      readonly __typename?: 'ComponentUiLink';
      readonly id: string;
      readonly label: string;
      readonly href: string;
    }>;
  };
};

export type LayoutHeaderFragmentFragment = {
  readonly __typename?: 'LayoutHeader';
  readonly menTitle: string;
  readonly newTitle: string;
  readonly womenTitle: string;
  readonly kidsTitle: string;
  readonly menLinkList: ReadonlyArray<{
    readonly __typename?: 'ComponentUiLinkList';
    readonly id: string;
    readonly title: string;
    readonly link: ReadonlyArray<{
      readonly __typename?: 'ComponentUiLink';
      readonly id: string;
      readonly label: string;
      readonly href: string;
    }>;
  }>;
  readonly newLinkList: ReadonlyArray<{
    readonly __typename?: 'ComponentUiLinkList';
    readonly id: string;
    readonly title: string;
    readonly link: ReadonlyArray<{
      readonly __typename?: 'ComponentUiLink';
      readonly id: string;
      readonly label: string;
      readonly href: string;
    }>;
  }>;
  readonly womenLinkList: ReadonlyArray<{
    readonly __typename?: 'ComponentUiLinkList';
    readonly id: string;
    readonly title: string;
    readonly link: ReadonlyArray<{
      readonly __typename?: 'ComponentUiLink';
      readonly id: string;
      readonly label: string;
      readonly href: string;
    }>;
  }>;
  readonly kidsLinkList: ReadonlyArray<{
    readonly __typename?: 'ComponentUiLinkList';
    readonly id: string;
    readonly title: string;
    readonly link: ReadonlyArray<{
      readonly __typename?: 'ComponentUiLink';
      readonly id: string;
      readonly label: string;
      readonly href: string;
    }>;
  }>;
  readonly favoritesIconButton: {
    readonly __typename?: 'ComponentUiIconButton';
    readonly id: string;
    readonly label: string;
    readonly href: string;
    readonly icon: Enum_Componentuiiconbutton_Icon;
  };
  readonly cartIconButton: {
    readonly __typename?: 'ComponentUiIconButton';
    readonly id: string;
    readonly label: string;
    readonly href: string;
    readonly icon: Enum_Componentuiiconbutton_Icon;
  };
};

export type LayoutPreHeaderFragmentFragment = {
  readonly __typename?: 'LayoutPreHeader';
  readonly jordanIconButton: {
    readonly __typename?: 'ComponentUiIconButton';
    readonly id: string;
    readonly label: string;
    readonly href: string;
    readonly icon: Enum_Componentuiiconbutton_Icon;
  };
  readonly coverseIconButton: {
    readonly __typename?: 'ComponentUiIconButton';
    readonly id: string;
    readonly label: string;
    readonly href: string;
    readonly icon: Enum_Componentuiiconbutton_Icon;
  };
  readonly links: {
    readonly __typename?: 'ComponentUiLinkList';
    readonly id: string;
    readonly title: string;
    readonly link: ReadonlyArray<{
      readonly __typename?: 'ComponentUiLink';
      readonly id: string;
      readonly label: string;
      readonly href: string;
    }>;
  };
};

export type LayoutSubfooterFragmentFragment = {
  readonly __typename?: 'LayoutSubfooter';
  readonly links: ReadonlyArray<{
    readonly __typename?: 'ComponentUiLinkList';
    readonly id: string;
    readonly title: string;
    readonly link: ReadonlyArray<{
      readonly __typename?: 'ComponentUiLink';
      readonly id: string;
      readonly label: string;
      readonly href: string;
    }>;
  }>;
};

export type PageHomeFragmentFragment = {
  readonly __typename?: 'PageHome';
  readonly title: string;
  readonly layout_header: {
    readonly __typename?: 'LayoutHeaderEntityResponse';
    readonly data: { readonly __typename?: 'LayoutHeaderEntity'; readonly id: string };
  };
  readonly layout_pre_header: {
    readonly __typename?: 'LayoutPreHeaderEntityResponse';
    readonly data: { readonly __typename?: 'LayoutPreHeaderEntity'; readonly id: string };
  };
  readonly layout_subfooter: {
    readonly __typename?: 'LayoutSubfooterEntityResponse';
    readonly data: { readonly __typename?: 'LayoutSubfooterEntity'; readonly id: string };
  };
  readonly layout_footer: {
    readonly __typename?: 'LayoutFooterEntityResponse';
    readonly data: { readonly __typename?: 'LayoutFooterEntity'; readonly id: string };
  };
  readonly section_membership: {
    readonly __typename?: 'SectionMembershipEntityResponse';
    readonly data: { readonly __typename?: 'SectionMembershipEntity'; readonly id: string };
  };
  readonly section_discount: {
    readonly __typename?: 'SectionDiscountEntityResponse';
    readonly data: { readonly __typename?: 'SectionDiscountEntity'; readonly id: string };
  };
  readonly section_banner: {
    readonly __typename?: 'SectionBannerEntityResponse';
    readonly data: { readonly __typename?: 'SectionBannerEntity'; readonly id: string };
  };
};

export type SectionBannerFragmentFragment = {
  readonly __typename?: 'SectionBanner';
  readonly sectionTitle: string;
  readonly preSectionTitle: string;
  readonly subSectionTitle: string;
  readonly linkButton: ReadonlyArray<{
    readonly __typename?: 'ComponentUiButton';
    readonly id: string;
    readonly label: string;
    readonly href: string;
  }>;
  readonly video: {
    readonly __typename?: 'UploadFileEntityResponse';
    readonly data: {
      readonly __typename?: 'UploadFileEntity';
      readonly attributes: {
        readonly __typename?: 'UploadFile';
        readonly name: string;
        readonly alternativeText: string;
        readonly caption: string;
        readonly width: number;
        readonly height: number;
        readonly formats: any;
        readonly hash: string;
        readonly ext: string;
        readonly mime: string;
        readonly size: number;
        readonly url: string;
        readonly previewUrl: string;
        readonly provider: string;
        readonly provider_metadata: any;
      };
    };
  };
};

export type SectionDiscountFragmentFragment = {
  readonly __typename?: 'SectionDiscount';
  readonly items: ReadonlyArray<{
    readonly __typename?: 'ComponentUiDiscountCard';
    readonly id: string;
    readonly title: string;
    readonly description: string;
  }>;
};

export type SectionMembershipFragmentFragment = {
  readonly __typename?: 'SectionMembership';
  readonly card: ReadonlyArray<{
    readonly __typename?: 'ComponentUiFigure';
    readonly id: string;
    readonly caption: string;
    readonly linkButton: ReadonlyArray<{
      readonly __typename?: 'ComponentUiButton';
      readonly id: string;
      readonly label: string;
      readonly href: string;
    }>;
    readonly image: {
      readonly __typename?: 'UploadFileEntityResponse';
      readonly data: {
        readonly __typename?: 'UploadFileEntity';
        readonly attributes: {
          readonly __typename?: 'UploadFile';
          readonly name: string;
          readonly alternativeText: string;
          readonly caption: string;
          readonly width: number;
          readonly height: number;
          readonly formats: any;
          readonly hash: string;
          readonly ext: string;
          readonly mime: string;
          readonly size: number;
          readonly url: string;
          readonly previewUrl: string;
          readonly provider: string;
          readonly provider_metadata: any;
        };
      };
    };
  }>;
};

export type GetCountriesQueryVariables = Exact<{ [key: string]: never }>;

export type GetCountriesQuery = {
  readonly __typename?: 'Query';
  readonly countries: {
    readonly __typename?: 'CountryEntityResponseCollection';
    readonly data: ReadonlyArray<{
      readonly __typename?: 'CountryEntity';
      readonly id: string;
      readonly attributes: {
        readonly __typename?: 'Country';
        readonly code3: string;
        readonly code2: string;
        readonly createdAt: any;
        readonly updatedAt: any;
        readonly publishedAt: any;
        readonly language: {
          readonly __typename?: 'LanguageEntityResponse';
          readonly data: {
            readonly __typename?: 'LanguageEntity';
            readonly id: string;
            readonly attributes: {
              readonly __typename?: 'Language';
              readonly name: string;
              readonly code: string;
            };
          };
        };
        readonly page_home: {
          readonly __typename?: 'PageHomeEntityResponse';
          readonly data: { readonly __typename?: 'PageHomeEntity'; readonly id: string };
        };
      };
    }>;
  };
};

export type GetLayoutFooterQueryVariables = Exact<{
  id: InputMaybe<Scalars['ID']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
}>;

export type GetLayoutFooterQuery = {
  readonly __typename?: 'Query';
  readonly layoutFooter: {
    readonly __typename?: 'LayoutFooterEntityResponse';
    readonly data: {
      readonly __typename?: 'LayoutFooterEntity';
      readonly attributes: {
        readonly __typename?: 'LayoutFooter';
        readonly title: string;
        readonly socilas: any;
        readonly mainLinks: {
          readonly __typename?: 'ComponentUiLinkList';
          readonly id: string;
          readonly title: string;
          readonly link: ReadonlyArray<{
            readonly __typename?: 'ComponentUiLink';
            readonly id: string;
            readonly label: string;
            readonly href: string;
          }>;
        };
        readonly links: ReadonlyArray<{
          readonly __typename?: 'ComponentUiLinkList';
          readonly id: string;
          readonly title: string;
          readonly link: ReadonlyArray<{
            readonly __typename?: 'ComponentUiLink';
            readonly id: string;
            readonly label: string;
            readonly href: string;
          }>;
        }>;
        readonly supportLinks: {
          readonly __typename?: 'ComponentUiLinkList';
          readonly id: string;
          readonly title: string;
          readonly link: ReadonlyArray<{
            readonly __typename?: 'ComponentUiLink';
            readonly id: string;
            readonly label: string;
            readonly href: string;
          }>;
        };
      };
    };
  };
};

export type GetLayoutHeaderQueryVariables = Exact<{
  id: InputMaybe<Scalars['ID']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
}>;

export type GetLayoutHeaderQuery = {
  readonly __typename?: 'Query';
  readonly layoutHeader: {
    readonly __typename?: 'LayoutHeaderEntityResponse';
    readonly data: {
      readonly __typename?: 'LayoutHeaderEntity';
      readonly attributes: {
        readonly __typename?: 'LayoutHeader';
        readonly menTitle: string;
        readonly newTitle: string;
        readonly womenTitle: string;
        readonly kidsTitle: string;
        readonly menLinkList: ReadonlyArray<{
          readonly __typename?: 'ComponentUiLinkList';
          readonly id: string;
          readonly title: string;
          readonly link: ReadonlyArray<{
            readonly __typename?: 'ComponentUiLink';
            readonly id: string;
            readonly label: string;
            readonly href: string;
          }>;
        }>;
        readonly newLinkList: ReadonlyArray<{
          readonly __typename?: 'ComponentUiLinkList';
          readonly id: string;
          readonly title: string;
          readonly link: ReadonlyArray<{
            readonly __typename?: 'ComponentUiLink';
            readonly id: string;
            readonly label: string;
            readonly href: string;
          }>;
        }>;
        readonly womenLinkList: ReadonlyArray<{
          readonly __typename?: 'ComponentUiLinkList';
          readonly id: string;
          readonly title: string;
          readonly link: ReadonlyArray<{
            readonly __typename?: 'ComponentUiLink';
            readonly id: string;
            readonly label: string;
            readonly href: string;
          }>;
        }>;
        readonly kidsLinkList: ReadonlyArray<{
          readonly __typename?: 'ComponentUiLinkList';
          readonly id: string;
          readonly title: string;
          readonly link: ReadonlyArray<{
            readonly __typename?: 'ComponentUiLink';
            readonly id: string;
            readonly label: string;
            readonly href: string;
          }>;
        }>;
        readonly favoritesIconButton: {
          readonly __typename?: 'ComponentUiIconButton';
          readonly id: string;
          readonly label: string;
          readonly href: string;
          readonly icon: Enum_Componentuiiconbutton_Icon;
        };
        readonly cartIconButton: {
          readonly __typename?: 'ComponentUiIconButton';
          readonly id: string;
          readonly label: string;
          readonly href: string;
          readonly icon: Enum_Componentuiiconbutton_Icon;
        };
      };
    };
  };
};

export type GetLayoutPreHeaderQueryVariables = Exact<{
  id: InputMaybe<Scalars['ID']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
}>;

export type GetLayoutPreHeaderQuery = {
  readonly __typename?: 'Query';
  readonly layoutPreHeader: {
    readonly __typename?: 'LayoutPreHeaderEntityResponse';
    readonly data: {
      readonly __typename?: 'LayoutPreHeaderEntity';
      readonly attributes: {
        readonly __typename?: 'LayoutPreHeader';
        readonly jordanIconButton: {
          readonly __typename?: 'ComponentUiIconButton';
          readonly id: string;
          readonly label: string;
          readonly href: string;
          readonly icon: Enum_Componentuiiconbutton_Icon;
        };
        readonly coverseIconButton: {
          readonly __typename?: 'ComponentUiIconButton';
          readonly id: string;
          readonly label: string;
          readonly href: string;
          readonly icon: Enum_Componentuiiconbutton_Icon;
        };
        readonly links: {
          readonly __typename?: 'ComponentUiLinkList';
          readonly id: string;
          readonly title: string;
          readonly link: ReadonlyArray<{
            readonly __typename?: 'ComponentUiLink';
            readonly id: string;
            readonly label: string;
            readonly href: string;
          }>;
        };
      };
    };
  };
};

export type GetLayoutSubfooterQueryVariables = Exact<{
  id: InputMaybe<Scalars['ID']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
}>;

export type GetLayoutSubfooterQuery = {
  readonly __typename?: 'Query';
  readonly layoutSubfooter: {
    readonly __typename?: 'LayoutSubfooterEntityResponse';
    readonly data: {
      readonly __typename?: 'LayoutSubfooterEntity';
      readonly attributes: {
        readonly __typename?: 'LayoutSubfooter';
        readonly links: ReadonlyArray<{
          readonly __typename?: 'ComponentUiLinkList';
          readonly id: string;
          readonly title: string;
          readonly link: ReadonlyArray<{
            readonly __typename?: 'ComponentUiLink';
            readonly id: string;
            readonly label: string;
            readonly href: string;
          }>;
        }>;
      };
    };
  };
};

export type GetPageHomeQueryVariables = Exact<{
  id: InputMaybe<Scalars['ID']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
}>;

export type GetPageHomeQuery = {
  readonly __typename?: 'Query';
  readonly pageHome: {
    readonly __typename?: 'PageHomeEntityResponse';
    readonly data: {
      readonly __typename?: 'PageHomeEntity';
      readonly id: string;
      readonly attributes: {
        readonly __typename?: 'PageHome';
        readonly title: string;
        readonly layout_header: {
          readonly __typename?: 'LayoutHeaderEntityResponse';
          readonly data: { readonly __typename?: 'LayoutHeaderEntity'; readonly id: string };
        };
        readonly layout_pre_header: {
          readonly __typename?: 'LayoutPreHeaderEntityResponse';
          readonly data: { readonly __typename?: 'LayoutPreHeaderEntity'; readonly id: string };
        };
        readonly layout_subfooter: {
          readonly __typename?: 'LayoutSubfooterEntityResponse';
          readonly data: { readonly __typename?: 'LayoutSubfooterEntity'; readonly id: string };
        };
        readonly layout_footer: {
          readonly __typename?: 'LayoutFooterEntityResponse';
          readonly data: { readonly __typename?: 'LayoutFooterEntity'; readonly id: string };
        };
        readonly section_membership: {
          readonly __typename?: 'SectionMembershipEntityResponse';
          readonly data: { readonly __typename?: 'SectionMembershipEntity'; readonly id: string };
        };
        readonly section_discount: {
          readonly __typename?: 'SectionDiscountEntityResponse';
          readonly data: { readonly __typename?: 'SectionDiscountEntity'; readonly id: string };
        };
        readonly section_banner: {
          readonly __typename?: 'SectionBannerEntityResponse';
          readonly data: { readonly __typename?: 'SectionBannerEntity'; readonly id: string };
        };
      };
    };
  };
};

export type GetSectionBannerQueryVariables = Exact<{
  id: InputMaybe<Scalars['ID']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
}>;

export type GetSectionBannerQuery = {
  readonly __typename?: 'Query';
  readonly sectionBanner: {
    readonly __typename?: 'SectionBannerEntityResponse';
    readonly data: {
      readonly __typename?: 'SectionBannerEntity';
      readonly attributes: {
        readonly __typename?: 'SectionBanner';
        readonly sectionTitle: string;
        readonly preSectionTitle: string;
        readonly subSectionTitle: string;
        readonly linkButton: ReadonlyArray<{
          readonly __typename?: 'ComponentUiButton';
          readonly id: string;
          readonly label: string;
          readonly href: string;
        }>;
        readonly video: {
          readonly __typename?: 'UploadFileEntityResponse';
          readonly data: {
            readonly __typename?: 'UploadFileEntity';
            readonly attributes: {
              readonly __typename?: 'UploadFile';
              readonly name: string;
              readonly alternativeText: string;
              readonly caption: string;
              readonly width: number;
              readonly height: number;
              readonly formats: any;
              readonly hash: string;
              readonly ext: string;
              readonly mime: string;
              readonly size: number;
              readonly url: string;
              readonly previewUrl: string;
              readonly provider: string;
              readonly provider_metadata: any;
            };
          };
        };
      };
    };
  };
};

export type GetSectionDiscountQueryVariables = Exact<{
  id: InputMaybe<Scalars['ID']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
}>;

export type GetSectionDiscountQuery = {
  readonly __typename?: 'Query';
  readonly sectionDiscount: {
    readonly __typename?: 'SectionDiscountEntityResponse';
    readonly data: {
      readonly __typename?: 'SectionDiscountEntity';
      readonly attributes: {
        readonly __typename?: 'SectionDiscount';
        readonly items: ReadonlyArray<{
          readonly __typename?: 'ComponentUiDiscountCard';
          readonly id: string;
          readonly title: string;
          readonly description: string;
        }>;
      };
    };
  };
};

export type GetSectionMembershipQueryVariables = Exact<{
  id: InputMaybe<Scalars['ID']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']>;
}>;

export type GetSectionMembershipQuery = {
  readonly __typename?: 'Query';
  readonly sectionMembership: {
    readonly __typename?: 'SectionMembershipEntityResponse';
    readonly data: {
      readonly __typename?: 'SectionMembershipEntity';
      readonly attributes: {
        readonly __typename?: 'SectionMembership';
        readonly card: ReadonlyArray<{
          readonly __typename?: 'ComponentUiFigure';
          readonly id: string;
          readonly caption: string;
          readonly linkButton: ReadonlyArray<{
            readonly __typename?: 'ComponentUiButton';
            readonly id: string;
            readonly label: string;
            readonly href: string;
          }>;
          readonly image: {
            readonly __typename?: 'UploadFileEntityResponse';
            readonly data: {
              readonly __typename?: 'UploadFileEntity';
              readonly attributes: {
                readonly __typename?: 'UploadFile';
                readonly name: string;
                readonly alternativeText: string;
                readonly caption: string;
                readonly width: number;
                readonly height: number;
                readonly formats: any;
                readonly hash: string;
                readonly ext: string;
                readonly mime: string;
                readonly size: number;
                readonly url: string;
                readonly previewUrl: string;
                readonly provider: string;
                readonly provider_metadata: any;
              };
            };
          };
        }>;
      };
    };
  };
};

export const LanguageEntityFragmentFragmentDoc = gql`
  fragment LanguageEntityFragment on LanguageEntity {
    id
    attributes {
      name
      code
    }
  }
`;
export const CountryFragmentFragmentDoc = gql`
  fragment CountryFragment on Country {
    code3
    code2
    createdAt
    updatedAt
    publishedAt
    language {
      data {
        ...LanguageEntityFragment
      }
    }
    page_home {
      data {
        id
      }
    }
  }
  ${LanguageEntityFragmentFragmentDoc}
`;
export const LinkFragmentFragmentDoc = gql`
  fragment LinkFragment on ComponentUiLink {
    id
    label
    href
  }
`;
export const LinkListFragmentFragmentDoc = gql`
  fragment LinkListFragment on ComponentUiLinkList {
    id
    title
    link {
      ...LinkFragment
    }
  }
  ${LinkFragmentFragmentDoc}
`;
export const LayoutFooterFragmentFragmentDoc = gql`
  fragment LayoutFooterFragment on LayoutFooter {
    title
    mainLinks {
      ...LinkListFragment
    }
    links {
      ...LinkListFragment
    }
    supportLinks {
      ...LinkListFragment
    }
    socilas
  }
  ${LinkListFragmentFragmentDoc}
`;
export const IconButtonFragmentFragmentDoc = gql`
  fragment IconButtonFragment on ComponentUiIconButton {
    id
    label
    href
    icon
  }
`;
export const LayoutHeaderFragmentFragmentDoc = gql`
  fragment LayoutHeaderFragment on LayoutHeader {
    menTitle
    menLinkList {
      ...LinkListFragment
    }
    newTitle
    newLinkList {
      ...LinkListFragment
    }
    womenTitle
    womenLinkList {
      ...LinkListFragment
    }
    kidsTitle
    kidsLinkList {
      ...LinkListFragment
    }
    favoritesIconButton {
      ...IconButtonFragment
    }
    cartIconButton {
      ...IconButtonFragment
    }
  }
  ${LinkListFragmentFragmentDoc}
  ${IconButtonFragmentFragmentDoc}
`;
export const LayoutPreHeaderFragmentFragmentDoc = gql`
  fragment LayoutPreHeaderFragment on LayoutPreHeader {
    jordanIconButton {
      ...IconButtonFragment
    }
    coverseIconButton {
      ...IconButtonFragment
    }
    links {
      ...LinkListFragment
    }
  }
  ${IconButtonFragmentFragmentDoc}
  ${LinkListFragmentFragmentDoc}
`;
export const LayoutSubfooterFragmentFragmentDoc = gql`
  fragment LayoutSubfooterFragment on LayoutSubfooter {
    links {
      ...LinkListFragment
    }
  }
  ${LinkListFragmentFragmentDoc}
`;
export const PageHomeFragmentFragmentDoc = gql`
  fragment PageHomeFragment on PageHome {
    title
    layout_header {
      data {
        id
      }
    }
    layout_pre_header {
      data {
        id
      }
    }
    layout_subfooter {
      data {
        id
      }
    }
    layout_footer {
      data {
        id
      }
    }
    section_membership {
      data {
        id
      }
    }
    section_discount {
      data {
        id
      }
    }
    section_banner {
      data {
        id
      }
    }
  }
`;
export const ButtonFragmentFragmentDoc = gql`
  fragment ButtonFragment on ComponentUiButton {
    id
    label
    href
  }
`;
export const FileFragmentFragmentDoc = gql`
  fragment FileFragment on UploadFile {
    name
    alternativeText
    caption
    width
    height
    formats
    hash
    ext
    mime
    size
    url
    previewUrl
    provider
    provider_metadata
  }
`;
export const SectionBannerFragmentFragmentDoc = gql`
  fragment SectionBannerFragment on SectionBanner {
    sectionTitle
    preSectionTitle
    subSectionTitle
    linkButton {
      ...ButtonFragment
    }
    video {
      data {
        attributes {
          ...FileFragment
        }
      }
    }
  }
  ${ButtonFragmentFragmentDoc}
  ${FileFragmentFragmentDoc}
`;
export const DiscountCardFragmentDoc = gql`
  fragment DiscountCard on ComponentUiDiscountCard {
    id
    title
    description
  }
`;
export const SectionDiscountFragmentFragmentDoc = gql`
  fragment SectionDiscountFragment on SectionDiscount {
    items {
      ...DiscountCard
    }
  }
  ${DiscountCardFragmentDoc}
`;
export const FigureFragmentFragmentDoc = gql`
  fragment FigureFragment on ComponentUiFigure {
    id
    caption
    linkButton {
      ...ButtonFragment
    }
    image {
      data {
        attributes {
          ...FileFragment
        }
      }
    }
  }
  ${ButtonFragmentFragmentDoc}
  ${FileFragmentFragmentDoc}
`;
export const SectionMembershipFragmentFragmentDoc = gql`
  fragment SectionMembershipFragment on SectionMembership {
    card {
      ...FigureFragment
    }
  }
  ${FigureFragmentFragmentDoc}
`;
export const GetCountriesDocument = gql`
  query getCountries {
    countries {
      data {
        id
        attributes {
          ...CountryFragment
        }
      }
    }
  }
  ${CountryFragmentFragmentDoc}
`;
export const GetLayoutFooterDocument = gql`
  query getLayoutFooter($id: ID, $locale: I18NLocaleCode) {
    layoutFooter(id: $id, locale: $locale) {
      data {
        attributes {
          ...LayoutFooterFragment
        }
      }
    }
  }
  ${LayoutFooterFragmentFragmentDoc}
`;
export const GetLayoutHeaderDocument = gql`
  query getLayoutHeader($id: ID, $locale: I18NLocaleCode) {
    layoutHeader(id: $id, locale: $locale) {
      data {
        attributes {
          ...LayoutHeaderFragment
        }
      }
    }
  }
  ${LayoutHeaderFragmentFragmentDoc}
`;
export const GetLayoutPreHeaderDocument = gql`
  query getLayoutPreHeader($id: ID, $locale: I18NLocaleCode) {
    layoutPreHeader(id: $id, locale: $locale) {
      data {
        attributes {
          ...LayoutPreHeaderFragment
        }
      }
    }
  }
  ${LayoutPreHeaderFragmentFragmentDoc}
`;
export const GetLayoutSubfooterDocument = gql`
  query getLayoutSubfooter($id: ID, $locale: I18NLocaleCode) {
    layoutSubfooter(id: $id, locale: $locale) {
      data {
        attributes {
          ...LayoutSubfooterFragment
        }
      }
    }
  }
  ${LayoutSubfooterFragmentFragmentDoc}
`;
export const GetPageHomeDocument = gql`
  query getPageHome($id: ID, $locale: I18NLocaleCode) {
    pageHome(id: $id, locale: $locale) {
      data {
        id
        attributes {
          ...PageHomeFragment
        }
      }
    }
  }
  ${PageHomeFragmentFragmentDoc}
`;
export const GetSectionBannerDocument = gql`
  query getSectionBanner($id: ID, $locale: I18NLocaleCode) {
    sectionBanner(id: $id, locale: $locale) {
      data {
        attributes {
          ...SectionBannerFragment
        }
      }
    }
  }
  ${SectionBannerFragmentFragmentDoc}
`;
export const GetSectionDiscountDocument = gql`
  query getSectionDiscount($id: ID, $locale: I18NLocaleCode) {
    sectionDiscount(id: $id, locale: $locale) {
      data {
        attributes {
          ...SectionDiscountFragment
        }
      }
    }
  }
  ${SectionDiscountFragmentFragmentDoc}
`;
export const GetSectionMembershipDocument = gql`
  query getSectionMembership($id: ID, $locale: I18NLocaleCode) {
    sectionMembership(id: $id, locale: $locale) {
      data {
        attributes {
          ...SectionMembershipFragment
        }
      }
    }
  }
  ${SectionMembershipFragmentFragmentDoc}
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getCountries(
      variables?: GetCountriesQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetCountriesQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetCountriesQuery>(GetCountriesDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders
          }),
        'getCountries',
        'query'
      );
    },
    getLayoutFooter(
      variables?: GetLayoutFooterQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetLayoutFooterQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetLayoutFooterQuery>(GetLayoutFooterDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders
          }),
        'getLayoutFooter',
        'query'
      );
    },
    getLayoutHeader(
      variables?: GetLayoutHeaderQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetLayoutHeaderQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetLayoutHeaderQuery>(GetLayoutHeaderDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders
          }),
        'getLayoutHeader',
        'query'
      );
    },
    getLayoutPreHeader(
      variables?: GetLayoutPreHeaderQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetLayoutPreHeaderQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetLayoutPreHeaderQuery>(GetLayoutPreHeaderDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders
          }),
        'getLayoutPreHeader',
        'query'
      );
    },
    getLayoutSubfooter(
      variables?: GetLayoutSubfooterQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetLayoutSubfooterQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetLayoutSubfooterQuery>(GetLayoutSubfooterDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders
          }),
        'getLayoutSubfooter',
        'query'
      );
    },
    getPageHome(
      variables?: GetPageHomeQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetPageHomeQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetPageHomeQuery>(GetPageHomeDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders
          }),
        'getPageHome',
        'query'
      );
    },
    getSectionBanner(
      variables?: GetSectionBannerQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetSectionBannerQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetSectionBannerQuery>(GetSectionBannerDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders
          }),
        'getSectionBanner',
        'query'
      );
    },
    getSectionDiscount(
      variables?: GetSectionDiscountQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetSectionDiscountQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetSectionDiscountQuery>(GetSectionDiscountDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders
          }),
        'getSectionDiscount',
        'query'
      );
    },
    getSectionMembership(
      variables?: GetSectionMembershipQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetSectionMembershipQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetSectionMembershipQuery>(GetSectionMembershipDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders
          }),
        'getSectionMembership',
        'query'
      );
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
