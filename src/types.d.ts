interface Event {
  id: string;
  createdTime: string;
  fields: {
    Name?: string;
    DateTime?: string;
    LocationName?: string;
    Description?: string;
    Link?: string;
    NewUrl?: string;
  };
}
