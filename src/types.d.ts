interface Event {
  id: string;
  createdTime: string;
  fields: {
    Name: string;
    DateTime: Date;
    LocationName: string;
    Description?: string;
    Link: string;
    LocationUrl: string;
  };
}
