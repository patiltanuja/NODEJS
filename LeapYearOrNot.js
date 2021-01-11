class LeapYearOrNot
{
    static leap(year)
    {
        if(year%100==0)
        {
            if(year%400==0)
            {
                console.log("leap year");
            }
            else{
                console.log("not a leap year");
            }
        }
        if(year%4==0)
            {
                console.log("leap year");
            }
            else{
                console.log("not a leap year");
            }
    }
}
// LeapYearOrNot.leap(2021);
LeapYearOrNot.leap(2024);