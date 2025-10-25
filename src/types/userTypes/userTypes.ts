interface UserTypes {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  profilePic: string;
  role: string;
  isSubscribed: boolean;
  companyName: string;
  joiningDate: string | null;
  planExpiration: string | null;
  subscriptionType: string | null;
  planId: string | null;
  totalPayPerJobCount: number;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}
export interface UserResponseDataType{
    data: UserTypes[]
}