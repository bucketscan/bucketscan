export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      mailinglist: {
        Row: {
          createdon: string
          email: string
        }
        Insert: {
          createdon?: string
          email: string
        }
        Update: {
          createdon?: string
          email?: string
        }
        Relationships: []
      }
      scans: {
        Row: {
          account_id: string
          created_on: string
          file_reference: string
          id: string
          result: Database["public"]["Enums"]["scan_result"]
        }
        Insert: {
          account_id: string
          created_on?: string
          file_reference: string
          id?: string
          result: Database["public"]["Enums"]["scan_result"]
        }
        Update: {
          account_id?: string
          created_on?: string
          file_reference?: string
          id?: string
          result?: Database["public"]["Enums"]["scan_result"]
        }
        Relationships: [
          {
            foreignKeyName: "fk_scans_accountid"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      accept_invitation: {
        Args: {
          lookup_invitation_token: string
        }
        Returns: Json
      }
      create_account: {
        Args: {
          slug?: string
          name?: string
        }
        Returns: Json
      }
      create_invitation: {
        Args: {
          account_id: string
          account_role: "owner" | "member"
          invitation_type: "one_time" | "24_hour"
        }
        Returns: Json
      }
      current_user_account_role: {
        Args: {
          account_id: string
        }
        Returns: Json
      }
      delete_invitation: {
        Args: {
          invitation_id: string
        }
        Returns: undefined
      }
      get_account: {
        Args: {
          account_id: string
        }
        Returns: Json
      }
      get_account_billing_status: {
        Args: {
          account_id: string
        }
        Returns: Json
      }
      get_account_by_slug: {
        Args: {
          slug: string
        }
        Returns: Json
      }
      get_account_id: {
        Args: {
          slug: string
        }
        Returns: string
      }
      get_account_invitations: {
        Args: {
          account_id: string
          results_limit?: number
          results_offset?: number
        }
        Returns: Json
      }
      get_account_members: {
        Args: {
          account_id: string
          results_limit?: number
          results_offset?: number
        }
        Returns: Json
      }
      get_accounts: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      get_personal_account: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      lookup_invitation: {
        Args: {
          lookup_invitation_token: string
        }
        Returns: Json
      }
      remove_account_member: {
        Args: {
          account_id: string
          user_id: string
        }
        Returns: undefined
      }
      service_role_upsert_customer_subscription: {
        Args: {
          account_id: string
          customer?: Json
          subscription?: Json
        }
        Returns: undefined
      }
      update_account: {
        Args: {
          account_id: string
          slug?: string
          name?: string
          public_metadata?: Json
          replace_metadata?: boolean
        }
        Returns: Json
      }
      update_account_user_role: {
        Args: {
          account_id: string
          user_id: string
          new_account_role: "owner" | "member"
          make_primary_owner?: boolean
        }
        Returns: undefined
      }
    }
    Enums: {
      file_status: "clean" | "infected" | "error"
      scan_result: "pending" | "complete_clean" | "complete_infected" | "failed"
      scan_status: "pending" | "in_progress" | "complete" | "error"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
