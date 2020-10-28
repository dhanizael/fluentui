import * as React from 'react';
import { DefaultButton } from '../DefaultButton/DefaultButton';
import { BaseComponent, customizable, nullRender } from '../../../Utilities';
import { IButtonProps } from '../Button.types';
import { getStyles } from './MessageBarButton.styles';

@customizable('MessageBarButton', ['theme'])
export class MessageBarButton extends BaseComponent<IButtonProps, {}> {

  public render() {
    const { styles, theme } = this.props;

    return (
      <DefaultButton
        { ...this.props }
        styles={ getStyles(theme!, styles) }
        onRenderDescription={ nullRender }
      />
    );
  }
}