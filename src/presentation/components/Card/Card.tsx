import React from 'react';
import {FlatList, ListRenderItemInfo, StyleSheet} from 'react-native';

import {useTheme} from '../../theme/theme';
import {BadgeList, BadgeListProps} from '../BadgeList/BadgeList';
import {IconList, IconListProps} from '../IconList/IconList';
import {H5, H6, H7} from '../Text/Text';

import {
  BadgeContainer,
  ContainerData,
  Content,
  DataColumn,
  DataRow,
  Row,
  TitleContainer,
  Wrapper,
} from './styles';

import {Icon, IconProps} from '../Icon/Icon';

// #region [TYPES]
type RowType = 'single-line' | 'double-line';

interface DisplayProps {
  prop?: string;
  value: string;
  icon?: IconProps;
  color?: string;
}

export interface RowsProps {
  type: RowType;
  displayProps: DisplayProps[] | DisplayProps;
}

interface CardProps {
  title?: string;
  background?: string;
  rows?: RowsProps[];
  icons?: IconListProps[];
  badges?: BadgeListProps[];
  elevation?: boolean;
  onPress?: (item: any) => void;
}
// #endregion

export function CardComponent({
  title,
  onPress,
  elevation,
  background,
  rows = [],
  icons = [],
  badges = [],
}: CardProps) {
  const {colors, fontSize, spacer} = useTheme();

  // const titleDirection = badges.length > 1 ? 'column' : 'row';
  const titleDirection = badges.length > 0 ? 'column' : 'row'; // TODO: verificar regra acima para ajustar responsividade

  const styles = StyleSheet.create({
    list: {
      flex: 1,
      height: 'auto',
      paddingHorizontal: spacer.Base_Value,
    },
  });

  const renderItem = (data: ListRenderItemInfo<DisplayProps>) => {
    const objIcon = {
      name: data.item.icon?.name || 'plus',
      color: data.item.icon?.color || colors.gray[300],
      size: data.item.icon?.size || fontSize.size_16,
    };

    const prop = `${data.item.prop || ''} `;

    const value = data.item.value || '';

    const hasIcon = !!data.item.icon;

    return (
      <DataRow direction="row">
        {hasIcon && (
          <DataColumn direction="row">
            <Icon icon={objIcon} />
          </DataColumn>
        )}

        {data.item.prop && (
          <DataColumn direction="row">
            <H7 color="placeholderVariant" family="Inter-Medium">
              {prop}
            </H7>
          </DataColumn>
        )}

        <DataColumn direction="row">
          <H7 family="Inter-Medium" color={data.item.color ?? colors.gray[700]}>
            {value}
          </H7>
        </DataColumn>
      </DataRow>
    );
  };

  return (
    <Wrapper
      background={background}
      onPress={onPress}
      disabled={!onPress}
      elevation={elevation}>
      {titleDirection === 'row' ? (
        <TitleContainer flex={1} direction="row">
          {!!title && (
            <Row flex={1} direction="row">
              <H6
                numberOfLines={1}
                family="Inter-SemiBold"
                color={colors.blue[500]}>
                {title}
              </H6>
            </Row>
          )}
          <BadgeContainer>
            {badges.length > 0 && <BadgeList badges={badges} />}
          </BadgeContainer>
        </TitleContainer>
      ) : (
        <TitleContainer flex={1} direction="column">
          <BadgeContainer hasFlexOne>
            {badges.length > 0 && <BadgeList badges={badges} />}
          </BadgeContainer>
          {!!title && (
            <Row flex={1} direction="row">
              <H5
                numberOfLines={2}
                family="Inter-SemiBold"
                color={colors.blue[500]}>
                {title}
              </H5>
            </Row>
          )}
        </TitleContainer>
      )}

      <Content>
        <ContainerData>
          {rows.map(row =>
            Array.isArray(row.displayProps) ? (
              <FlatList
                data={row.displayProps}
                horizontal
                keyExtractor={Math.random()}
                renderItem={renderItem}
                style={styles.line}
              />
            ) : null,
          )}
        </ContainerData>
      </Content>
      {icons.length > 0 && <IconList icons={icons} />}
    </Wrapper>
  );
}

export const Card = React.memo(CardComponent);
