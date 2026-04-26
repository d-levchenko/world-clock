export interface TimeResponse {
  datetime: string;
  unixtime: number;
  timezone: string;
  utc_offset: string;
  dst: boolean;
  day_of_year: number;
}
