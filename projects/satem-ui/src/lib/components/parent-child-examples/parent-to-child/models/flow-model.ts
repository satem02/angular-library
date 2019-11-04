import { ContactInfo , AddressInfo } from ".";

export class FlowInfo {
  public name: string;
  public surName: string;  
  public contact: ContactInfo = new ContactInfo();
  public address: AddressInfo = new AddressInfo();
}
