import { UserInfo, ContactInfo, AddressInfo } from '../models';

export class MainInfo {
  public projectName: string;
  public customer: UserInfo = new UserInfo();  
  public contact: ContactInfo = new ContactInfo();
  public address: AddressInfo = new AddressInfo();
}
