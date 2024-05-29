import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type LandingErrorProps = {
  BaseURL: string;
};

export type WorkOrderItemsProps = {
  IdMobile: string;
  headerName?: string;
};

export type ProvidedServiceItemsProps = {
  headerName?: string;
};

export type WorkOrderEntryHeaderProps = {
  IdMobile?: string;
};

export type ProvidedServiceEntryHeaderProps = {
  EntryIdMobile?: string;
};

export type RootStackParamList = {
  Teste: undefined;
  Home: undefined;
  Login: undefined;
  ImportConfigs: undefined;
  GettingStarted: undefined;
  LandingError: LandingErrorProps;
  Settings: undefined;
  ExpiredSession: undefined;
  WorkOrderList: undefined;
  WorkOrderItems: WorkOrderItemsProps;
  WorkOrderEntryHeader: WorkOrderEntryHeaderProps;
  ProvidedServiceList: undefined;
  ProvidedServiceItems: ProvidedServiceItemsProps;
  ProvidedServiceHeader: ProvidedServiceEntryHeaderProps;
  History: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
