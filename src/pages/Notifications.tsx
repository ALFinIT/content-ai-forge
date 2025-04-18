
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { 
  Bell, 
  FileText, 
  AlertCircle, 
  CheckCircle, 
  Calendar, 
  Clock 
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface Notification {
  id: string;
  title: string;
  description: string;
  time: string;
  read: boolean;
  type: 'content' | 'system' | 'schedule';
}

const Notifications = () => {
  const { toast } = useToast();
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      title: 'Content Published',
      description: 'Your blog post "10 Tips for Content Creation" has been published.',
      time: '2 hours ago',
      read: false,
      type: 'content'
    },
    {
      id: '2',
      title: 'System Update',
      description: 'ROHUM AI Forge has been updated to version 2.0 with new features.',
      time: '1 day ago',
      read: false,
      type: 'system'
    },
    {
      id: '3',
      title: 'Content Approval Required',
      description: 'A new piece of content is waiting for your approval.',
      time: '3 days ago',
      read: true,
      type: 'content'
    },
    {
      id: '4',
      title: 'Scheduled Content',
      description: 'Your post "Marketing Strategies 2023" is scheduled for tomorrow.',
      time: '1 week ago',
      read: true,
      type: 'schedule'
    },
    {
      id: '5',
      title: 'API Key Expiring',
      description: 'Your Groq API key will expire in 7 days. Please update it in settings.',
      time: '1 week ago',
      read: true,
      type: 'system'
    }
  ]);

  const markAllAsRead = () => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification => ({
        ...notification,
        read: true
      }))
    );
    
    toast({
      title: "All notifications marked as read",
      description: "Your notification feed has been updated."
    });
  };

  const markAsRead = (id: string) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const deleteNotification = (id: string) => {
    setNotifications(prevNotifications =>
      prevNotifications.filter(notification => notification.id !== id)
    );
    
    toast({
      title: "Notification deleted",
      description: "The notification has been removed from your feed."
    });
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'content':
        return <FileText className="h-5 w-5 text-[#9b87f5]" />;
      case 'system':
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      case 'schedule':
        return <Calendar className="h-5 w-5 text-green-500" />;
      default:
        return <Bell className="h-5 w-5 text-[#9b87f5]" />;
    }
  };

  const unreadCount = notifications.filter(notification => !notification.read).length;

  return (
    <MainLayout>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Notifications</h1>
          <p className="text-muted-foreground">
            {unreadCount === 0 
              ? "You're all caught up!" 
              : `You have ${unreadCount} unread notification${unreadCount > 1 ? 's' : ''}`}
          </p>
        </div>
        
        <Button 
          variant="outline" 
          onClick={markAllAsRead}
          disabled={unreadCount === 0}
          className="border-[#7E69AB]/30 hover:bg-[#7E69AB]/10"
        >
          <CheckCircle className="h-4 w-4 mr-2" />
          Mark all as read
        </Button>
      </div>
      
      <div className="space-y-4">
        {notifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-12 border border-dashed rounded-lg border-[#7E69AB]/30 bg-[#7E69AB]/5">
            <Bell className="h-12 w-12 text-[#7E69AB]/40 mb-4" />
            <h3 className="text-xl font-medium">No notifications</h3>
            <p className="text-muted-foreground mt-2 text-center">
              You don't have any notifications at the moment. <br />
              We'll notify you when there's something new.
            </p>
          </div>
        ) : (
          notifications.map((notification) => (
            <div 
              key={notification.id} 
              className={`p-4 border rounded-lg flex items-start gap-4 ${
                notification.read 
                  ? 'border-[#7E69AB]/20 bg-transparent' 
                  : 'border-[#7E69AB]/30 bg-[#7E69AB]/5'
              }`}
              onClick={() => markAsRead(notification.id)}
            >
              <div className="mt-1">
                {getNotificationIcon(notification.type)}
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className={`font-medium ${notification.read ? 'text-foreground' : 'text-[#9b87f5]'}`}>
                    {notification.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {notification.time}
                    </span>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-6 w-6 p-0 text-muted-foreground hover:text-foreground"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteNotification(notification.id);
                      }}
                    >
                      ×
                    </Button>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {notification.description}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </MainLayout>
  );
};

export default Notifications;
