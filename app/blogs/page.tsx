"use client"

import { Card, CardContent} from "@/components/ui/card"
import BlogList  from "@/components/blogs/blog-list"


export default function BlogsPage() {
  return (
    
        <div className="flex-1 space-y-4 p-8 pt-6">
          
          <Card>
            
            
             
            <CardContent>
              <BlogList />
            </CardContent>
          </Card>
          
        </div>
       
  )
}