using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Server.Models
{
    public class CurbMount
    {
        public int Id {get; set;}
        public string? CurbMountCode {get; set;}
        public string? SizeCode {get; set;}
        public float OutsideCurbWidth{get; set;}
        public  float OutsideCurbHeight{get; set;}
        public float MaxSkyClearWidth{get; set;}
        public float MaxSkyClearHeight{get; set;}

        internal static ActionResult<List<CurbMount>> GetAll()
        {
            throw new NotImplementedException();
        }
    }
}