export class CouponModel {
	categories: string;
	start_date: string;
	first_name: string;
	public constructor(
		public id?: number,
		public company?: string,
		public title?: string,
		public description?: string,
		public startDate?: Date,
		public endDate?: Date,
		public amount?: number,
		public price?: number,
		public image?: string
	) {

	}
}