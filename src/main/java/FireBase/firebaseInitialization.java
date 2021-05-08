package FireBase;
import java.util.Scanner;


/**
// * @author 
 *
 */
interface calculateEffectiveCost
{
	public double calculateEffectiveCost(String itemType,double itemPrice);
}
interface calculateSurcharge
{
	public  double surChargeCalculation(double finalPrice);
}
/**
 * @param args
 */
public class firebaseInitialization {
	public static void main(String[] args) {
		// TODO Auto-generated method stub'
		for(;;) {
			
			Scanner sc=new Scanner(System.in);
			
			
			double effectiveCost=0.0;
			
			System.out.print("-name  ");
			String itemName=sc.next();
			int n=itemName.length();
			
			try {
				for(int i=0;i<n;i++) {
					int m=(int)itemName.charAt(i);
//					System.out.println(m);
					if((m>=97 && m<=122)||(m>=65 && m<=91))
					{
						continue;
					}
					else
					{
						throw new NumberFormatException();
					}
				}	
			}
			catch(NumberFormatException e)
			{
				System.out.println(e);
				System.out.print("-name  ");
				itemName=sc.next();
			}
			
			System.out.print("-price  ");
			double itemPrice=sc.nextDouble();
			
			try {
			if (itemPrice < 0) {
			      throw new IllegalArgumentException();    
			}    
			
			}
			catch(IllegalArgumentException e)
			{
				System.out.println(e);
				System.out.print("-price  ");
				itemPrice=sc.nextDouble();
			}
			
			
			System.out.print("-quantity  ");
			int itemQuantity=0;
			for(;;) {
			try {
				System.out.print("-quantity  "+itemQuantity);
				itemQuantity=sc.nextInt();
				System.out.print("-quantity  "+itemQuantity);
				
			if (itemQuantity < 0) {
			     throw new IllegalArgumentException("Item cannot be negative");    
			}
			else
				break;
			}
			catch(IllegalArgumentException e)
			{
				System.out.println(e);
				System.out.println("-quantity  ");
//				itemQuantity=sc.nextInt();
			}
			catch(Exception e) {
				System.out.println("hello");
				sc.next();
			}
			}
			
			System.out.print("-type  ");
			String itemType=sc.next();
			
			if(itemType.equals("Raw")) {
			Raw rawObj=new Raw();
			effectiveCost=(rawObj.calculateEffectiveCost(itemType, itemPrice))*itemQuantity;
			}
			else if(itemType.equals("Manufactured")) {
			Manufactured manufacturedObj=new Manufactured();
			effectiveCost=(manufacturedObj.calculateEffectiveCost(itemType, itemPrice))*itemQuantity;
			}
			else if(itemType.equals("Imported")) {
			Imported impoObj=new Imported();
			effectiveCost=(impoObj.surChargeCalculation(itemPrice))*itemQuantity;
			}
			else {
				System.out.println("Please enter item type as Raw/Manufactured/Imported");
			}
		
			System.out.println(effectiveCost);
			System.out.println("Do you want to enter details of any other item (y/n) ?");
			String choice=sc.next();

			if(choice.equals("y"))
			{
				continue;
			}
			else if(choice.equals("n"))
			{
				break;
			}
			else
			{
				System.out.println("You did not enter a valid choice");
				break;
			}
			}//end for loop

}
}
	
class Raw implements calculateEffectiveCost{
	public double calculateEffectiveCost(String itemType,double itemPrice) {
		// TODO Auto-generated method stub
		double value=0.0; 
		value=(12.5*0.01)*itemPrice;
		return value;
	}
}

class Manufactured implements calculateEffectiveCost
{
	public double calculateEffectiveCost(String itemType,double itemPrice) {
		// TODO Auto-generated method stub
		double value=0.0;
		value=(12.5*0.01)*itemPrice+(2*0.01)*(itemPrice+((12.5*0.01)*itemPrice));
		return value;
	}
}

class Imported implements calculateSurcharge{
	
public double finalcost(double itemPrice)
{
	double importDuty=(10*0.01)*itemPrice;
	double finalPrice=importDuty+itemPrice;
	double surCharge=surChargeCalculation(finalPrice);
	double effectiveCost=(importDuty+surCharge);
	return effectiveCost;
}
	public  double surChargeCalculation(double finalPrice) {
		// TODO Auto-generated method stub
		
		double surCharge=0.0;
		if(finalPrice<=100)
		{
			surCharge=5.00;
		}
		else if(finalPrice>100 && finalPrice<=200)
		{
			surCharge=10.00;
		}
		else 
		{
			surCharge=(5*0.01)*finalPrice;
		}	
		return surCharge;
		
	}
}