import { UserInfo } from "../user/user-info";
import { ChoiceInfo } from "../common/choice-info";

export class MoneyTransferInfo {
  public email: string;
  public name: string;
  public senderUser: UserInfo;
  public receiverUser: UserInfo;
  public amount: number;
  public currencyType: ChoiceInfo;
}
