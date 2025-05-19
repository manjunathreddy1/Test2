import * as React from 'react';
//import styles from './Permtest.module.scss';
import type { IPermtestProps } from './IPermtestProps';
//import { escape } from '@microsoft/sp-lodash-subset';
import {isCurrentUserMemberOfSharePointGroup} from './PermChecker';

export default class Permtest extends React.Component<IPermtestProps> {

  public async componentDidMount(): Promise<void> {

    const groupName:string="Test Group";
    try {
      const isMember = await isCurrentUserMemberOfSharePointGroup(this.props.context, groupName);
      console.log(`User is member of ${groupName}:`, isMember);
      
    } catch (error) {
      console.error("Error in componentDidMount:", error);
     
    }
  }


  public render(): React.ReactElement<IPermtestProps> {
  console.log("SPFx context:", this.context);
    return (
     <></>
    );
  }
}
