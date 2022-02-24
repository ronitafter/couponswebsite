class CouponModel {

   public constructor(id: number = 0, companyId: number = 0, categories: string = "", title: string = "", description: string = "", start_date: string = "", end_date: string = "", amount: number = 0, price: number = 0, image: string = "") {
      this.id = id;
      this.companyId = companyId;
      this.categories = categories;
      this.title = title;
      this.description = description;
      this.start_date = start_date;
      this.end_date = end_date;
      this.amount = amount;
      this.price = price;
      this.image = image;
   }

   public id: number;
   public companyId: number;
   public categories: string;
   public title: string;
   public description: string;
   public start_date: string;
   public end_date: string;
   public amount: number;
   public price: number;
   public image: string;
}

export default CouponModel;