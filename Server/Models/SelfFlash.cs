using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Models
{
    public class SelfFlash
     {
        public int Id { get; set; }

        public string? SelfFlashCode { get; set; }

        public float OutsideFrameWidth { get; set; }

        public float OutsideFrameHeight { get; set; }

        public float RoughOpeningWidth { get; set; }

        public float RoughOpeningHeight { get; set; }

        public string? SizeCode { get; set; }

    }
}