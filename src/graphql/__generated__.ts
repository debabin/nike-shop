import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
  I18NLocaleCode: { input: any; output: any };
  JSON: { input: any; output: any };
  Upload: { input: any; output: any };
};

export type BooleanFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly contains: InputMaybe<Scalars['Boolean']['input']>;
  readonly containsi: InputMaybe<Scalars['Boolean']['input']>;
  readonly endsWith: InputMaybe<Scalars['Boolean']['input']>;
  readonly eq: InputMaybe<Scalars['Boolean']['input']>;
  readonly eqi: InputMaybe<Scalars['Boolean']['input']>;
  readonly gt: InputMaybe<Scalars['Boolean']['input']>;
  readonly gte: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly lt: InputMaybe<Scalars['Boolean']['input']>;
  readonly lte: InputMaybe<Scalars['Boolean']['input']>;
  readonly ne: InputMaybe<Scalars['Boolean']['input']>;
  readonly not: InputMaybe<BooleanFilterInput>;
  readonly notContains: InputMaybe<Scalars['Boolean']['input']>;
  readonly notContainsi: InputMaybe<Scalars['Boolean']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentEntityShoeOption = {
  readonly __typename?: 'ComponentEntityShoeOption';
  readonly color: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly medias: Maybe<UploadFileRelationResponseCollection>;
};

export type ComponentEntityShoeOptionMediasArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentEntityShoeOptionFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentEntityShoeOptionFiltersInput>>>;
  readonly color: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentEntityShoeOptionFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentEntityShoeOptionFiltersInput>>>;
};

export type ComponentEntityShoeOptionInput = {
  readonly color: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly medias: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
};

export type ComponentSettingsSectionBanner = {
  readonly __typename?: 'ComponentSettingsSectionBanner';
  readonly id: Scalars['ID']['output'];
  readonly showVideo: Scalars['Boolean']['output'];
};

export type ComponentUiButton = {
  readonly __typename?: 'ComponentUiButton';
  readonly href: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly label: Scalars['String']['output'];
};

export type ComponentUiButtonFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiButtonFiltersInput>>>;
  readonly href: InputMaybe<StringFilterInput>;
  readonly label: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentUiButtonFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiButtonFiltersInput>>>;
};

export type ComponentUiButtonInput = {
  readonly href: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly label: InputMaybe<Scalars['String']['input']>;
};

export type ComponentUiDiscountCard = {
  readonly __typename?: 'ComponentUiDiscountCard';
  readonly description: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly title: Maybe<Scalars['String']['output']>;
};

export type ComponentUiDiscountCardFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiDiscountCardFiltersInput>>>;
  readonly description: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentUiDiscountCardFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiDiscountCardFiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentUiDiscountCardInput = {
  readonly description: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentUiFigure = {
  readonly __typename?: 'ComponentUiFigure';
  readonly caption: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly image: UploadFileEntityResponse;
  readonly linkButton: Maybe<ReadonlyArray<Maybe<ComponentUiButton>>>;
};

export type ComponentUiFigureLinkButtonArgs = {
  filters: InputMaybe<ComponentUiButtonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentUiFigureFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiFigureFiltersInput>>>;
  readonly caption: InputMaybe<StringFilterInput>;
  readonly linkButton: InputMaybe<ComponentUiButtonFiltersInput>;
  readonly not: InputMaybe<ComponentUiFigureFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiFigureFiltersInput>>>;
};

export type ComponentUiFigureInput = {
  readonly caption: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly image: InputMaybe<Scalars['ID']['input']>;
  readonly linkButton: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiButtonInput>>>;
};

export type ComponentUiIconButton = {
  readonly __typename?: 'ComponentUiIconButton';
  readonly href: Maybe<Scalars['String']['output']>;
  readonly icon: Enum_Componentuiiconbutton_Icon;
  readonly id: Scalars['ID']['output'];
  readonly label: Maybe<Scalars['String']['output']>;
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
  readonly href: InputMaybe<Scalars['String']['input']>;
  readonly icon: InputMaybe<Enum_Componentuiiconbutton_Icon>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly label: InputMaybe<Scalars['String']['input']>;
};

export type ComponentUiLink = {
  readonly __typename?: 'ComponentUiLink';
  readonly href: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly label: Scalars['String']['output'];
};

export type ComponentUiLinkFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiLinkFiltersInput>>>;
  readonly href: InputMaybe<StringFilterInput>;
  readonly label: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentUiLinkFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiLinkFiltersInput>>>;
};

export type ComponentUiLinkInput = {
  readonly href: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly label: InputMaybe<Scalars['String']['input']>;
};

export type ComponentUiLinkList = {
  readonly __typename?: 'ComponentUiLinkList';
  readonly id: Scalars['ID']['output'];
  readonly link: Maybe<ReadonlyArray<Maybe<ComponentUiLink>>>;
  readonly title: Maybe<Scalars['String']['output']>;
};

export type ComponentUiLinkListLinkArgs = {
  filters: InputMaybe<ComponentUiLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentUiLinkListFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiLinkListFiltersInput>>>;
  readonly link: InputMaybe<ComponentUiLinkFiltersInput>;
  readonly not: InputMaybe<ComponentUiLinkListFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiLinkListFiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentUiLinkListInput = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly link: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiLinkInput>>>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type Country = {
  readonly __typename?: 'Country';
  readonly code2: Scalars['String']['output'];
  readonly code3: Scalars['String']['output'];
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly language: Maybe<LanguageEntityResponse>;
  readonly page_home: Maybe<PageHomeEntityResponse>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type CountryEntity = {
  readonly __typename?: 'CountryEntity';
  readonly attributes: Maybe<Country>;
  readonly id: Maybe<Scalars['ID']['output']>;
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
  readonly code2: InputMaybe<Scalars['String']['input']>;
  readonly code3: InputMaybe<Scalars['String']['input']>;
  readonly language: InputMaybe<Scalars['ID']['input']>;
  readonly page_home: InputMaybe<Scalars['ID']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type DateTimeFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly contains: InputMaybe<Scalars['DateTime']['input']>;
  readonly containsi: InputMaybe<Scalars['DateTime']['input']>;
  readonly endsWith: InputMaybe<Scalars['DateTime']['input']>;
  readonly eq: InputMaybe<Scalars['DateTime']['input']>;
  readonly eqi: InputMaybe<Scalars['DateTime']['input']>;
  readonly gt: InputMaybe<Scalars['DateTime']['input']>;
  readonly gte: InputMaybe<Scalars['DateTime']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly lt: InputMaybe<Scalars['DateTime']['input']>;
  readonly lte: InputMaybe<Scalars['DateTime']['input']>;
  readonly ne: InputMaybe<Scalars['DateTime']['input']>;
  readonly not: InputMaybe<DateTimeFilterInput>;
  readonly notContains: InputMaybe<Scalars['DateTime']['input']>;
  readonly notContainsi: InputMaybe<Scalars['DateTime']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Enum_Componentuiiconbutton_Icon {
  Cart = 'cart',
  Converse = 'converse',
  Jordan = 'jordan',
  Like = 'like'
}

export enum Enum_Type_Name {
  BasketballShoes = 'Basketball_Shoes',
  MenSShoes = 'Men_s_Shoes',
  WomenSShoes = 'Women_s_Shoes'
}

export type FileInfoInput = {
  readonly alternativeText: InputMaybe<Scalars['String']['input']>;
  readonly caption: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly contains: InputMaybe<Scalars['Float']['input']>;
  readonly containsi: InputMaybe<Scalars['Float']['input']>;
  readonly endsWith: InputMaybe<Scalars['Float']['input']>;
  readonly eq: InputMaybe<Scalars['Float']['input']>;
  readonly eqi: InputMaybe<Scalars['Float']['input']>;
  readonly gt: InputMaybe<Scalars['Float']['input']>;
  readonly gte: InputMaybe<Scalars['Float']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly lt: InputMaybe<Scalars['Float']['input']>;
  readonly lte: InputMaybe<Scalars['Float']['input']>;
  readonly ne: InputMaybe<Scalars['Float']['input']>;
  readonly not: InputMaybe<FloatFilterInput>;
  readonly notContains: InputMaybe<Scalars['Float']['input']>;
  readonly notContainsi: InputMaybe<Scalars['Float']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph =
  | ComponentEntityShoeOption
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
  readonly code: Maybe<Scalars['String']['output']>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  readonly __typename?: 'I18NLocaleEntity';
  readonly attributes: Maybe<I18NLocale>;
  readonly id: Maybe<Scalars['ID']['output']>;
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
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly contains: InputMaybe<Scalars['ID']['input']>;
  readonly containsi: InputMaybe<Scalars['ID']['input']>;
  readonly endsWith: InputMaybe<Scalars['ID']['input']>;
  readonly eq: InputMaybe<Scalars['ID']['input']>;
  readonly eqi: InputMaybe<Scalars['ID']['input']>;
  readonly gt: InputMaybe<Scalars['ID']['input']>;
  readonly gte: InputMaybe<Scalars['ID']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly lt: InputMaybe<Scalars['ID']['input']>;
  readonly lte: InputMaybe<Scalars['ID']['input']>;
  readonly ne: InputMaybe<Scalars['ID']['input']>;
  readonly not: InputMaybe<IdFilterInput>;
  readonly notContains: InputMaybe<Scalars['ID']['input']>;
  readonly notContainsi: InputMaybe<Scalars['ID']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly contains: InputMaybe<Scalars['Int']['input']>;
  readonly containsi: InputMaybe<Scalars['Int']['input']>;
  readonly endsWith: InputMaybe<Scalars['Int']['input']>;
  readonly eq: InputMaybe<Scalars['Int']['input']>;
  readonly eqi: InputMaybe<Scalars['Int']['input']>;
  readonly gt: InputMaybe<Scalars['Int']['input']>;
  readonly gte: InputMaybe<Scalars['Int']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly lt: InputMaybe<Scalars['Int']['input']>;
  readonly lte: InputMaybe<Scalars['Int']['input']>;
  readonly ne: InputMaybe<Scalars['Int']['input']>;
  readonly not: InputMaybe<IntFilterInput>;
  readonly notContains: InputMaybe<Scalars['Int']['input']>;
  readonly notContainsi: InputMaybe<Scalars['Int']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly contains: InputMaybe<Scalars['JSON']['input']>;
  readonly containsi: InputMaybe<Scalars['JSON']['input']>;
  readonly endsWith: InputMaybe<Scalars['JSON']['input']>;
  readonly eq: InputMaybe<Scalars['JSON']['input']>;
  readonly eqi: InputMaybe<Scalars['JSON']['input']>;
  readonly gt: InputMaybe<Scalars['JSON']['input']>;
  readonly gte: InputMaybe<Scalars['JSON']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly lt: InputMaybe<Scalars['JSON']['input']>;
  readonly lte: InputMaybe<Scalars['JSON']['input']>;
  readonly ne: InputMaybe<Scalars['JSON']['input']>;
  readonly not: InputMaybe<JsonFilterInput>;
  readonly notContains: InputMaybe<Scalars['JSON']['input']>;
  readonly notContainsi: InputMaybe<Scalars['JSON']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['JSON']['input']>;
};

export type Language = {
  readonly __typename?: 'Language';
  readonly code: Scalars['String']['output'];
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly name: Scalars['String']['output'];
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type LanguageEntity = {
  readonly __typename?: 'LanguageEntity';
  readonly attributes: Maybe<Language>;
  readonly id: Maybe<Scalars['ID']['output']>;
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
  readonly code: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type LayoutFooter = {
  readonly __typename?: 'LayoutFooter';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly links: ReadonlyArray<Maybe<ComponentUiLinkList>>;
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<LayoutFooterRelationResponseCollection>;
  readonly mainLinks: Maybe<ComponentUiLinkList>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly socilas: Scalars['JSON']['output'];
  readonly supportLinks: Maybe<ComponentUiLinkList>;
  readonly title: Maybe<Scalars['String']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type LayoutFooterLinksArgs = {
  filters: InputMaybe<ComponentUiLinkListFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type LayoutFooterLocalizationsArgs = {
  filters: InputMaybe<LayoutFooterFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type LayoutFooterEntity = {
  readonly __typename?: 'LayoutFooterEntity';
  readonly attributes: Maybe<LayoutFooter>;
  readonly id: Maybe<Scalars['ID']['output']>;
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
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly socilas: InputMaybe<Scalars['JSON']['input']>;
  readonly supportLinks: InputMaybe<ComponentUiLinkListInput>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type LayoutFooterRelationResponseCollection = {
  readonly __typename?: 'LayoutFooterRelationResponseCollection';
  readonly data: ReadonlyArray<LayoutFooterEntity>;
};

export type LayoutHeader = {
  readonly __typename?: 'LayoutHeader';
  readonly cartIconButton: ComponentUiIconButton;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly favoritesIconButton: ComponentUiIconButton;
  readonly kidsLinkList: ReadonlyArray<Maybe<ComponentUiLinkList>>;
  readonly kidsTitle: Scalars['String']['output'];
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<LayoutHeaderRelationResponseCollection>;
  readonly menLinkList: Maybe<ReadonlyArray<Maybe<ComponentUiLinkList>>>;
  readonly menTitle: Scalars['String']['output'];
  readonly newLinkList: ReadonlyArray<Maybe<ComponentUiLinkList>>;
  readonly newTitle: Scalars['String']['output'];
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly womenLinkList: ReadonlyArray<Maybe<ComponentUiLinkList>>;
  readonly womenTitle: Scalars['String']['output'];
};

export type LayoutHeaderKidsLinkListArgs = {
  filters: InputMaybe<ComponentUiLinkListFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type LayoutHeaderLocalizationsArgs = {
  filters: InputMaybe<LayoutHeaderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type LayoutHeaderMenLinkListArgs = {
  filters: InputMaybe<ComponentUiLinkListFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type LayoutHeaderNewLinkListArgs = {
  filters: InputMaybe<ComponentUiLinkListFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type LayoutHeaderWomenLinkListArgs = {
  filters: InputMaybe<ComponentUiLinkListFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type LayoutHeaderEntity = {
  readonly __typename?: 'LayoutHeaderEntity';
  readonly attributes: Maybe<LayoutHeader>;
  readonly id: Maybe<Scalars['ID']['output']>;
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
  readonly kidsTitle: InputMaybe<Scalars['String']['input']>;
  readonly menLinkList: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiLinkListInput>>>;
  readonly menTitle: InputMaybe<Scalars['String']['input']>;
  readonly newLinkList: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiLinkListInput>>>;
  readonly newTitle: InputMaybe<Scalars['String']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
  readonly womenLinkList: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiLinkListInput>>>;
  readonly womenTitle: InputMaybe<Scalars['String']['input']>;
};

export type LayoutHeaderRelationResponseCollection = {
  readonly __typename?: 'LayoutHeaderRelationResponseCollection';
  readonly data: ReadonlyArray<LayoutHeaderEntity>;
};

export type LayoutPreHeader = {
  readonly __typename?: 'LayoutPreHeader';
  readonly coverseIconButton: Maybe<ComponentUiIconButton>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly jordanIconButton: Maybe<ComponentUiIconButton>;
  readonly links: ComponentUiLinkList;
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<LayoutPreHeaderRelationResponseCollection>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type LayoutPreHeaderLocalizationsArgs = {
  filters: InputMaybe<LayoutPreHeaderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type LayoutPreHeaderEntity = {
  readonly __typename?: 'LayoutPreHeaderEntity';
  readonly attributes: Maybe<LayoutPreHeader>;
  readonly id: Maybe<Scalars['ID']['output']>;
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
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type LayoutPreHeaderRelationResponseCollection = {
  readonly __typename?: 'LayoutPreHeaderRelationResponseCollection';
  readonly data: ReadonlyArray<LayoutPreHeaderEntity>;
};

export type LayoutSubfooter = {
  readonly __typename?: 'LayoutSubfooter';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly links: ReadonlyArray<Maybe<ComponentUiLinkList>>;
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<LayoutSubfooterRelationResponseCollection>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type LayoutSubfooterLinksArgs = {
  filters: InputMaybe<ComponentUiLinkListFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type LayoutSubfooterLocalizationsArgs = {
  filters: InputMaybe<LayoutSubfooterFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type LayoutSubfooterEntity = {
  readonly __typename?: 'LayoutSubfooterEntity';
  readonly attributes: Maybe<LayoutSubfooter>;
  readonly id: Maybe<Scalars['ID']['output']>;
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
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
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
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};

export type MutationCreateCountryArgs = {
  data: CountryInput;
};

export type MutationCreateLanguageArgs = {
  data: LanguageInput;
};

export type MutationCreateLayoutFooterArgs = {
  data: LayoutFooterInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateLayoutFooterLocalizationArgs = {
  data: InputMaybe<LayoutFooterInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateLayoutHeaderArgs = {
  data: LayoutHeaderInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateLayoutHeaderLocalizationArgs = {
  data: InputMaybe<LayoutHeaderInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateLayoutPreHeaderArgs = {
  data: LayoutPreHeaderInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateLayoutPreHeaderLocalizationArgs = {
  data: InputMaybe<LayoutPreHeaderInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateLayoutSubfooterArgs = {
  data: LayoutSubfooterInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateLayoutSubfooterLocalizationArgs = {
  data: InputMaybe<LayoutSubfooterInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreatePageHomeArgs = {
  data: PageHomeInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreatePageHomeLocalizationArgs = {
  data: InputMaybe<PageHomeInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateSectionBannerArgs = {
  data: SectionBannerInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateSectionBannerLocalizationArgs = {
  data: InputMaybe<SectionBannerInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateSectionDiscountArgs = {
  data: SectionDiscountInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateSectionDiscountLocalizationArgs = {
  data: InputMaybe<SectionDiscountInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateSectionMembershipArgs = {
  data: SectionMembershipInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateSectionMembershipLocalizationArgs = {
  data: InputMaybe<SectionMembershipInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateSectionTrendArgs = {
  data: SectionTrendInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateSectionTrendLocalizationArgs = {
  data: InputMaybe<SectionTrendInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateShoeArgs = {
  data: ShoeInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateShoeLocalizationArgs = {
  data: InputMaybe<ShoeInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateSizeArgs = {
  data: SizeInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateSizeLocalizationArgs = {
  data: InputMaybe<SizeInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateTypeArgs = {
  data: TypeInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateTypeLocalizationArgs = {
  data: InputMaybe<TypeInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
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
  id: Scalars['ID']['input'];
};

export type MutationDeleteLanguageArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteLayoutFooterArgs = {
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteLayoutHeaderArgs = {
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteLayoutPreHeaderArgs = {
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteLayoutSubfooterArgs = {
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeletePageHomeArgs = {
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteSectionBannerArgs = {
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteSectionDiscountArgs = {
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteSectionMembershipArgs = {
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteSectionTrendArgs = {
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteShoeArgs = {
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteSizeArgs = {
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteTypeArgs = {
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};

export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};

export type MutationMultipleUploadArgs = {
  field: InputMaybe<Scalars['String']['input']>;
  files: ReadonlyArray<InputMaybe<Scalars['Upload']['input']>>;
  ref: InputMaybe<Scalars['String']['input']>;
  refId: InputMaybe<Scalars['ID']['input']>;
};

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};

export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};

export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};

export type MutationUpdateCountryArgs = {
  data: CountryInput;
  id: Scalars['ID']['input'];
};

export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info: InputMaybe<FileInfoInput>;
};

export type MutationUpdateLanguageArgs = {
  data: LanguageInput;
  id: Scalars['ID']['input'];
};

export type MutationUpdateLayoutFooterArgs = {
  data: LayoutFooterInput;
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateLayoutHeaderArgs = {
  data: LayoutHeaderInput;
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateLayoutPreHeaderArgs = {
  data: LayoutPreHeaderInput;
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateLayoutSubfooterArgs = {
  data: LayoutSubfooterInput;
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdatePageHomeArgs = {
  data: PageHomeInput;
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateSectionBannerArgs = {
  data: SectionBannerInput;
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateSectionDiscountArgs = {
  data: SectionDiscountInput;
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateSectionMembershipArgs = {
  data: SectionMembershipInput;
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateSectionTrendArgs = {
  data: SectionTrendInput;
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateShoeArgs = {
  data: ShoeInput;
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateSizeArgs = {
  data: SizeInput;
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateTypeArgs = {
  data: TypeInput;
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};

export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};

export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};

export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};

export type MutationUploadArgs = {
  field: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info: InputMaybe<FileInfoInput>;
  ref: InputMaybe<Scalars['String']['input']>;
  refId: InputMaybe<Scalars['ID']['input']>;
};

export type PageHome = {
  readonly __typename?: 'PageHome';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly layout_footer: Maybe<LayoutFooterEntityResponse>;
  readonly layout_header: Maybe<LayoutHeaderEntityResponse>;
  readonly layout_pre_header: Maybe<LayoutPreHeaderEntityResponse>;
  readonly layout_subfooter: Maybe<LayoutSubfooterEntityResponse>;
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<PageHomeRelationResponseCollection>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly section_banner: Maybe<SectionBannerEntityResponse>;
  readonly section_discount: Maybe<SectionDiscountEntityResponse>;
  readonly section_membership: Maybe<SectionMembershipEntityResponse>;
  readonly section_trend: Maybe<SectionTrendEntityResponse>;
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type PageHomeLocalizationsArgs = {
  filters: InputMaybe<PageHomeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type PageHomeEntity = {
  readonly __typename?: 'PageHomeEntity';
  readonly attributes: Maybe<PageHome>;
  readonly id: Maybe<Scalars['ID']['output']>;
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
  readonly layout_footer: InputMaybe<Scalars['ID']['input']>;
  readonly layout_header: InputMaybe<Scalars['ID']['input']>;
  readonly layout_pre_header: InputMaybe<Scalars['ID']['input']>;
  readonly layout_subfooter: InputMaybe<Scalars['ID']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly section_banner: InputMaybe<Scalars['ID']['input']>;
  readonly section_discount: InputMaybe<Scalars['ID']['input']>;
  readonly section_membership: InputMaybe<Scalars['ID']['input']>;
  readonly section_trend: InputMaybe<Scalars['ID']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type PageHomeRelationResponseCollection = {
  readonly __typename?: 'PageHomeRelationResponseCollection';
  readonly data: ReadonlyArray<PageHomeEntity>;
};

export type Pagination = {
  readonly __typename?: 'Pagination';
  readonly page: Scalars['Int']['output'];
  readonly pageCount: Scalars['Int']['output'];
  readonly pageSize: Scalars['Int']['output'];
  readonly total: Scalars['Int']['output'];
};

export type PaginationArg = {
  readonly limit: InputMaybe<Scalars['Int']['input']>;
  readonly page: InputMaybe<Scalars['Int']['input']>;
  readonly pageSize: InputMaybe<Scalars['Int']['input']>;
  readonly start: InputMaybe<Scalars['Int']['input']>;
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
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryCountryArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};

export type QueryI18NLocaleArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};

export type QueryI18NLocalesArgs = {
  filters: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryLanguageArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};

export type QueryLanguagesArgs = {
  filters: InputMaybe<LanguageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryLayoutFooterArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryLayoutFootersArgs = {
  filters: InputMaybe<LayoutFooterFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryLayoutHeaderArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryLayoutHeadersArgs = {
  filters: InputMaybe<LayoutHeaderFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryLayoutPreHeaderArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryLayoutPreHeadersArgs = {
  filters: InputMaybe<LayoutPreHeaderFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryLayoutSubfooterArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryLayoutSubfootersArgs = {
  filters: InputMaybe<LayoutSubfooterFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryPageHomeArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryPageHomesArgs = {
  filters: InputMaybe<PageHomeFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type QuerySectionBannerArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QuerySectionBannersArgs = {
  filters: InputMaybe<SectionBannerFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type QuerySectionDiscountArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QuerySectionDiscountsArgs = {
  filters: InputMaybe<SectionDiscountFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type QuerySectionMembershipArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QuerySectionMembershipsArgs = {
  filters: InputMaybe<SectionMembershipFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type QuerySectionTrendArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QuerySectionTrendsArgs = {
  filters: InputMaybe<SectionTrendFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryShoeArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryShoesArgs = {
  filters: InputMaybe<ShoeFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type QuerySizeArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QuerySizesArgs = {
  filters: InputMaybe<SizeFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryTypeArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryTypesArgs = {
  filters: InputMaybe<TypeFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryUploadFileArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};

export type QueryUploadFilesArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryUploadFolderArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};

export type QueryUploadFoldersArgs = {
  filters: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryUsersPermissionsRoleArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};

export type QueryUsersPermissionsRolesArgs = {
  filters: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryUsersPermissionsUserArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};

export type QueryUsersPermissionsUsersArgs = {
  filters: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ResponseCollectionMeta = {
  readonly __typename?: 'ResponseCollectionMeta';
  readonly pagination: Pagination;
};

export type SectionBanner = {
  readonly __typename?: 'SectionBanner';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly linkButton: ReadonlyArray<Maybe<ComponentUiButton>>;
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<SectionBannerRelationResponseCollection>;
  readonly preSectionTitle: Maybe<Scalars['String']['output']>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly sectionTitle: Scalars['String']['output'];
  readonly subSectionTitle: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly video: Maybe<UploadFileEntityResponse>;
};

export type SectionBannerLinkButtonArgs = {
  filters: InputMaybe<ComponentUiButtonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type SectionBannerLocalizationsArgs = {
  filters: InputMaybe<SectionBannerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type SectionBannerEntity = {
  readonly __typename?: 'SectionBannerEntity';
  readonly attributes: Maybe<SectionBanner>;
  readonly id: Maybe<Scalars['ID']['output']>;
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
  readonly preSectionTitle: InputMaybe<Scalars['String']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly sectionTitle: InputMaybe<Scalars['String']['input']>;
  readonly subSectionTitle: InputMaybe<Scalars['String']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
  readonly video: InputMaybe<Scalars['ID']['input']>;
};

export type SectionBannerRelationResponseCollection = {
  readonly __typename?: 'SectionBannerRelationResponseCollection';
  readonly data: ReadonlyArray<SectionBannerEntity>;
};

export type SectionDiscount = {
  readonly __typename?: 'SectionDiscount';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly items: ReadonlyArray<Maybe<ComponentUiDiscountCard>>;
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<SectionDiscountRelationResponseCollection>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type SectionDiscountItemsArgs = {
  filters: InputMaybe<ComponentUiDiscountCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type SectionDiscountLocalizationsArgs = {
  filters: InputMaybe<SectionDiscountFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type SectionDiscountEntity = {
  readonly __typename?: 'SectionDiscountEntity';
  readonly attributes: Maybe<SectionDiscount>;
  readonly id: Maybe<Scalars['ID']['output']>;
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
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type SectionDiscountRelationResponseCollection = {
  readonly __typename?: 'SectionDiscountRelationResponseCollection';
  readonly data: ReadonlyArray<SectionDiscountEntity>;
};

export type SectionMembership = {
  readonly __typename?: 'SectionMembership';
  readonly card: ReadonlyArray<Maybe<ComponentUiFigure>>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<SectionMembershipRelationResponseCollection>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type SectionMembershipCardArgs = {
  filters: InputMaybe<ComponentUiFigureFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type SectionMembershipLocalizationsArgs = {
  filters: InputMaybe<SectionMembershipFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type SectionMembershipEntity = {
  readonly __typename?: 'SectionMembershipEntity';
  readonly attributes: Maybe<SectionMembership>;
  readonly id: Maybe<Scalars['ID']['output']>;
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
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type SectionMembershipRelationResponseCollection = {
  readonly __typename?: 'SectionMembershipRelationResponseCollection';
  readonly data: ReadonlyArray<SectionMembershipEntity>;
};

export type SectionTrend = {
  readonly __typename?: 'SectionTrend';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<SectionTrendRelationResponseCollection>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly sectionTitle: Scalars['String']['output'];
  readonly shoes: Maybe<ShoeRelationResponseCollection>;
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type SectionTrendLocalizationsArgs = {
  filters: InputMaybe<SectionTrendFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type SectionTrendShoesArgs = {
  filters: InputMaybe<ShoeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type SectionTrendEntity = {
  readonly __typename?: 'SectionTrendEntity';
  readonly attributes: Maybe<SectionTrend>;
  readonly id: Maybe<Scalars['ID']['output']>;
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
  readonly shoes: InputMaybe<ShoeFiltersInput>;
  readonly title: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type SectionTrendInput = {
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly sectionTitle: InputMaybe<Scalars['String']['input']>;
  readonly shoes: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type SectionTrendRelationResponseCollection = {
  readonly __typename?: 'SectionTrendRelationResponseCollection';
  readonly data: ReadonlyArray<SectionTrendEntity>;
};

export type Shoe = {
  readonly __typename?: 'Shoe';
  readonly content: Maybe<Scalars['String']['output']>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly description: Scalars['String']['output'];
  readonly details: Maybe<Scalars['String']['output']>;
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<ShoeRelationResponseCollection>;
  readonly name: Scalars['String']['output'];
  readonly options: ReadonlyArray<Maybe<ComponentEntityShoeOption>>;
  readonly price: Scalars['String']['output'];
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly type: Maybe<TypeEntityResponse>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type ShoeLocalizationsArgs = {
  filters: InputMaybe<ShoeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ShoeOptionsArgs = {
  filters: InputMaybe<ComponentEntityShoeOptionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ShoeEntity = {
  readonly __typename?: 'ShoeEntity';
  readonly attributes: Maybe<Shoe>;
  readonly id: Maybe<Scalars['ID']['output']>;
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
  readonly content: InputMaybe<StringFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly description: InputMaybe<StringFilterInput>;
  readonly details: InputMaybe<StringFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly locale: InputMaybe<StringFilterInput>;
  readonly localizations: InputMaybe<ShoeFiltersInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ShoeFiltersInput>;
  readonly options: InputMaybe<ComponentEntityShoeOptionFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ShoeFiltersInput>>>;
  readonly price: InputMaybe<StringFilterInput>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly type: InputMaybe<TypeFiltersInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type ShoeInput = {
  readonly content: InputMaybe<Scalars['String']['input']>;
  readonly description: InputMaybe<Scalars['String']['input']>;
  readonly details: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly options: InputMaybe<ReadonlyArray<InputMaybe<ComponentEntityShoeOptionInput>>>;
  readonly price: InputMaybe<Scalars['String']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly type: InputMaybe<Scalars['ID']['input']>;
};

export type ShoeRelationResponseCollection = {
  readonly __typename?: 'ShoeRelationResponseCollection';
  readonly data: ReadonlyArray<ShoeEntity>;
};

export type Size = {
  readonly __typename?: 'Size';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<SizeRelationResponseCollection>;
  readonly name: Scalars['String']['output'];
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly values: Scalars['String']['output'];
};

export type SizeLocalizationsArgs = {
  filters: InputMaybe<SizeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type SizeEntity = {
  readonly __typename?: 'SizeEntity';
  readonly attributes: Maybe<Size>;
  readonly id: Maybe<Scalars['ID']['output']>;
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
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly values: InputMaybe<Scalars['String']['input']>;
};

export type SizeRelationResponseCollection = {
  readonly __typename?: 'SizeRelationResponseCollection';
  readonly data: ReadonlyArray<SizeEntity>;
};

export type StringFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly containsi: InputMaybe<Scalars['String']['input']>;
  readonly endsWith: InputMaybe<Scalars['String']['input']>;
  readonly eq: InputMaybe<Scalars['String']['input']>;
  readonly eqi: InputMaybe<Scalars['String']['input']>;
  readonly gt: InputMaybe<Scalars['String']['input']>;
  readonly gte: InputMaybe<Scalars['String']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly lt: InputMaybe<Scalars['String']['input']>;
  readonly lte: InputMaybe<Scalars['String']['input']>;
  readonly ne: InputMaybe<Scalars['String']['input']>;
  readonly not: InputMaybe<StringFilterInput>;
  readonly notContains: InputMaybe<Scalars['String']['input']>;
  readonly notContainsi: InputMaybe<Scalars['String']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['String']['input']>;
};

export type Type = {
  readonly __typename?: 'Type';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<TypeRelationResponseCollection>;
  readonly name: Maybe<Enum_Type_Name>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type TypeLocalizationsArgs = {
  filters: InputMaybe<TypeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type TypeEntity = {
  readonly __typename?: 'TypeEntity';
  readonly attributes: Maybe<Type>;
  readonly id: Maybe<Scalars['ID']['output']>;
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
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type TypeRelationResponseCollection = {
  readonly __typename?: 'TypeRelationResponseCollection';
  readonly data: ReadonlyArray<TypeEntity>;
};

export type UploadFile = {
  readonly __typename?: 'UploadFile';
  readonly alternativeText: Maybe<Scalars['String']['output']>;
  readonly caption: Maybe<Scalars['String']['output']>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly ext: Maybe<Scalars['String']['output']>;
  readonly formats: Maybe<Scalars['JSON']['output']>;
  readonly hash: Scalars['String']['output'];
  readonly height: Maybe<Scalars['Int']['output']>;
  readonly mime: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly previewUrl: Maybe<Scalars['String']['output']>;
  readonly provider: Scalars['String']['output'];
  readonly provider_metadata: Maybe<Scalars['JSON']['output']>;
  readonly related: Maybe<ReadonlyArray<Maybe<GenericMorph>>>;
  readonly size: Scalars['Float']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly url: Scalars['String']['output'];
  readonly width: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  readonly __typename?: 'UploadFileEntity';
  readonly attributes: Maybe<UploadFile>;
  readonly id: Maybe<Scalars['ID']['output']>;
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
  readonly alternativeText: InputMaybe<Scalars['String']['input']>;
  readonly caption: InputMaybe<Scalars['String']['input']>;
  readonly ext: InputMaybe<Scalars['String']['input']>;
  readonly folder: InputMaybe<Scalars['ID']['input']>;
  readonly folderPath: InputMaybe<Scalars['String']['input']>;
  readonly formats: InputMaybe<Scalars['JSON']['input']>;
  readonly hash: InputMaybe<Scalars['String']['input']>;
  readonly height: InputMaybe<Scalars['Int']['input']>;
  readonly mime: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly previewUrl: InputMaybe<Scalars['String']['input']>;
  readonly provider: InputMaybe<Scalars['String']['input']>;
  readonly provider_metadata: InputMaybe<Scalars['JSON']['input']>;
  readonly size: InputMaybe<Scalars['Float']['input']>;
  readonly url: InputMaybe<Scalars['String']['input']>;
  readonly width: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  readonly __typename?: 'UploadFileRelationResponseCollection';
  readonly data: ReadonlyArray<UploadFileEntity>;
};

export type UploadFolder = {
  readonly __typename?: 'UploadFolder';
  readonly children: Maybe<UploadFolderRelationResponseCollection>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly files: Maybe<UploadFileRelationResponseCollection>;
  readonly name: Scalars['String']['output'];
  readonly parent: Maybe<UploadFolderEntityResponse>;
  readonly path: Scalars['String']['output'];
  readonly pathId: Scalars['Int']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type UploadFolderChildrenArgs = {
  filters: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderFilesArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  readonly __typename?: 'UploadFolderEntity';
  readonly attributes: Maybe<UploadFolder>;
  readonly id: Maybe<Scalars['ID']['output']>;
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
  readonly children: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly files: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly parent: InputMaybe<Scalars['ID']['input']>;
  readonly path: InputMaybe<Scalars['String']['input']>;
  readonly pathId: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  readonly __typename?: 'UploadFolderRelationResponseCollection';
  readonly data: ReadonlyArray<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  readonly __typename?: 'UsersPermissionsCreateRolePayload';
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  readonly __typename?: 'UsersPermissionsDeleteRolePayload';
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  readonly identifier: Scalars['String']['input'];
  readonly password: Scalars['String']['input'];
  readonly provider: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  readonly __typename?: 'UsersPermissionsLoginPayload';
  readonly jwt: Maybe<Scalars['String']['output']>;
  readonly user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  readonly __typename?: 'UsersPermissionsMe';
  readonly blocked: Maybe<Scalars['Boolean']['output']>;
  readonly confirmed: Maybe<Scalars['Boolean']['output']>;
  readonly email: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly role: Maybe<UsersPermissionsMeRole>;
  readonly username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  readonly __typename?: 'UsersPermissionsMeRole';
  readonly description: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  readonly type: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  readonly __typename?: 'UsersPermissionsPasswordPayload';
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  readonly __typename?: 'UsersPermissionsPermission';
  readonly action: Scalars['String']['output'];
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly role: Maybe<UsersPermissionsRoleEntityResponse>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  readonly __typename?: 'UsersPermissionsPermissionEntity';
  readonly attributes: Maybe<UsersPermissionsPermission>;
  readonly id: Maybe<Scalars['ID']['output']>;
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
  readonly email: Scalars['String']['input'];
  readonly password: Scalars['String']['input'];
  readonly username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  readonly __typename?: 'UsersPermissionsRole';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly name: Scalars['String']['output'];
  readonly permissions: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  readonly type: Maybe<Scalars['String']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly users: Maybe<UsersPermissionsUserRelationResponseCollection>;
};

export type UsersPermissionsRolePermissionsArgs = {
  filters: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleUsersArgs = {
  filters: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  readonly __typename?: 'UsersPermissionsRoleEntity';
  readonly attributes: Maybe<UsersPermissionsRole>;
  readonly id: Maybe<Scalars['ID']['output']>;
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
  readonly description: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly permissions: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly type: InputMaybe<Scalars['String']['input']>;
  readonly users: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  readonly __typename?: 'UsersPermissionsUpdateRolePayload';
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  readonly __typename?: 'UsersPermissionsUser';
  readonly blocked: Maybe<Scalars['Boolean']['output']>;
  readonly confirmed: Maybe<Scalars['Boolean']['output']>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly email: Scalars['String']['output'];
  readonly provider: Maybe<Scalars['String']['output']>;
  readonly role: Maybe<UsersPermissionsRoleEntityResponse>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  readonly __typename?: 'UsersPermissionsUserEntity';
  readonly attributes: Maybe<UsersPermissionsUser>;
  readonly id: Maybe<Scalars['ID']['output']>;
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
  readonly blocked: InputMaybe<Scalars['Boolean']['input']>;
  readonly confirmationToken: InputMaybe<Scalars['String']['input']>;
  readonly confirmed: InputMaybe<Scalars['Boolean']['input']>;
  readonly email: InputMaybe<Scalars['String']['input']>;
  readonly password: InputMaybe<Scalars['String']['input']>;
  readonly provider: InputMaybe<Scalars['String']['input']>;
  readonly resetPasswordToken: InputMaybe<Scalars['String']['input']>;
  readonly role: InputMaybe<Scalars['ID']['input']>;
  readonly username: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  readonly __typename?: 'UsersPermissionsUserRelationResponseCollection';
  readonly data: ReadonlyArray<UsersPermissionsUserEntity>;
};

export type ShoeFragmentFragment = {
  readonly __typename?: 'Shoe';
  readonly name: string;
  readonly description: string;
  readonly content: string;
  readonly details: string;
  readonly price: string;
  readonly type: {
    readonly __typename?: 'TypeEntityResponse';
    readonly data: {
      readonly __typename?: 'TypeEntity';
      readonly attributes: { readonly __typename?: 'Type'; readonly name: Enum_Type_Name };
    };
  };
  readonly options: ReadonlyArray<{
    readonly __typename?: 'ComponentEntityShoeOption';
    readonly color: string;
    readonly medias: {
      readonly __typename?: 'UploadFileRelationResponseCollection';
      readonly data: ReadonlyArray<{
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
      }>;
    };
  }>;
};

export type TypeFragmentFragment = { readonly __typename?: 'Type'; readonly name: Enum_Type_Name };

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

export type ShoeOptionFragmentFragment = {
  readonly __typename?: 'ComponentEntityShoeOption';
  readonly color: string;
  readonly medias: {
    readonly __typename?: 'UploadFileRelationResponseCollection';
    readonly data: ReadonlyArray<{
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
    }>;
  };
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
  readonly section_trend: {
    readonly __typename?: 'SectionTrendEntityResponse';
    readonly data: { readonly __typename?: 'SectionTrendEntity'; readonly id: string };
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

export type SectionTrendFragmentFragment = {
  readonly __typename?: 'SectionTrend';
  readonly sectionTitle: string;
  readonly shoes: {
    readonly __typename?: 'ShoeRelationResponseCollection';
    readonly data: ReadonlyArray<{
      readonly __typename?: 'ShoeEntity';
      readonly attributes: {
        readonly __typename?: 'Shoe';
        readonly name: string;
        readonly price: string;
        readonly options: ReadonlyArray<{
          readonly __typename?: 'ComponentEntityShoeOption';
          readonly color: string;
          readonly medias: {
            readonly __typename?: 'UploadFileRelationResponseCollection';
            readonly data: ReadonlyArray<{
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
            }>;
          };
        }>;
        readonly type: {
          readonly __typename?: 'TypeEntityResponse';
          readonly data: {
            readonly __typename?: 'TypeEntity';
            readonly attributes: { readonly __typename?: 'Type'; readonly name: Enum_Type_Name };
          };
        };
      };
    }>;
  };
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
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
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
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
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
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
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
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
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
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
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
        readonly section_trend: {
          readonly __typename?: 'SectionTrendEntityResponse';
          readonly data: { readonly __typename?: 'SectionTrendEntity'; readonly id: string };
        };
      };
    };
  };
};

export type GetSectionBannerQueryVariables = Exact<{
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
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
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
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
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
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

export type GetSectionTrendQueryVariables = Exact<{
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;

export type GetSectionTrendQuery = {
  readonly __typename?: 'Query';
  readonly sectionTrend: {
    readonly __typename?: 'SectionTrendEntityResponse';
    readonly data: {
      readonly __typename?: 'SectionTrendEntity';
      readonly attributes: {
        readonly __typename?: 'SectionTrend';
        readonly sectionTitle: string;
        readonly shoes: {
          readonly __typename?: 'ShoeRelationResponseCollection';
          readonly data: ReadonlyArray<{
            readonly __typename?: 'ShoeEntity';
            readonly attributes: {
              readonly __typename?: 'Shoe';
              readonly name: string;
              readonly price: string;
              readonly options: ReadonlyArray<{
                readonly __typename?: 'ComponentEntityShoeOption';
                readonly color: string;
                readonly medias: {
                  readonly __typename?: 'UploadFileRelationResponseCollection';
                  readonly data: ReadonlyArray<{
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
                  }>;
                };
              }>;
              readonly type: {
                readonly __typename?: 'TypeEntityResponse';
                readonly data: {
                  readonly __typename?: 'TypeEntity';
                  readonly attributes: {
                    readonly __typename?: 'Type';
                    readonly name: Enum_Type_Name;
                  };
                };
              };
            };
          }>;
        };
      };
    };
  };
};

export const TypeFragmentFragmentDoc = gql`
  fragment TypeFragment on Type {
    name
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
export const ShoeOptionFragmentFragmentDoc = gql`
  fragment ShoeOptionFragment on ComponentEntityShoeOption {
    color
    medias {
      data {
        attributes {
          ...FileFragment
        }
      }
    }
  }
  ${FileFragmentFragmentDoc}
`;
export const ShoeFragmentFragmentDoc = gql`
  fragment ShoeFragment on Shoe {
    name
    type {
      data {
        attributes {
          ...TypeFragment
        }
      }
    }
    description
    content
    options {
      ...ShoeOptionFragment
    }
    details
    price
  }
  ${TypeFragmentFragmentDoc}
  ${ShoeOptionFragmentFragmentDoc}
`;
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
    section_trend {
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
export const SectionTrendFragmentFragmentDoc = gql`
  fragment SectionTrendFragment on SectionTrend {
    sectionTitle
    shoes {
      data {
        attributes {
          name
          options {
            ...ShoeOptionFragment
          }
          type {
            data {
              attributes {
                ...TypeFragment
              }
            }
          }
          price
        }
      }
    }
  }
  ${ShoeOptionFragmentFragmentDoc}
  ${TypeFragmentFragmentDoc}
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
export const GetSectionTrendDocument = gql`
  query getSectionTrend($id: ID, $locale: I18NLocaleCode) {
    sectionTrend(id: $id, locale: $locale) {
      data {
        attributes {
          ...SectionTrendFragment
        }
      }
    }
  }
  ${SectionTrendFragmentFragmentDoc}
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
      requestHeaders?: GraphQLClientRequestHeaders
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
      requestHeaders?: GraphQLClientRequestHeaders
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
      requestHeaders?: GraphQLClientRequestHeaders
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
      requestHeaders?: GraphQLClientRequestHeaders
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
      requestHeaders?: GraphQLClientRequestHeaders
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
      requestHeaders?: GraphQLClientRequestHeaders
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
      requestHeaders?: GraphQLClientRequestHeaders
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
      requestHeaders?: GraphQLClientRequestHeaders
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
      requestHeaders?: GraphQLClientRequestHeaders
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
    },
    getSectionTrend(
      variables?: GetSectionTrendQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<GetSectionTrendQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetSectionTrendQuery>(GetSectionTrendDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders
          }),
        'getSectionTrend',
        'query'
      );
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
